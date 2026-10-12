/**
 * @file アグネスタキオン - 育成
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/edu-32-plan-a'),
  ...require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/edu-32-plan-b'),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
   * @param {number} rel アグネスタキオンのプレイヤーへの好感度
   * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
   * @param {number} moti アグネスタキオンのやる気
   * @param {number} stmn_rat アグネスタキオンの体力割合
   */
  async train(tachyon, you, callname, call_25, rel, love, moti, stmn_rat) {
    const buffer = [];
    if (love >= 90 && rel > 75 && stmn_rat > 0.45) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            "가세, 가세, ",
            callname,
            "～～오늘 실험을 어서 시작하자고",
          ]);
          await tachyon.say_and_wait(
            "……아니면 달링이라고 불러 주길 바라나❤️",
          );
        },
        async () => {
          await tachyon.say_and_wait([
            "컨디션이 좋냐고? 후후, ",
            callname,
            "와(과) 함께라면 어느 날이든 내 컨디션은 한결같이 최상이라네",
          ]);
          await tachyon.say_and_wait(
            "……물론 다른 의미로도 말이지❤️",
          );
        },
      );
      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            callname,
            "～～오늘 트레이닝은 설렁설렁하면 안 되네",
          ]);
          await tachyon.say_and_wait(
            "왜냐고? 정말이지…… 기초적인 생물학도 모르나?",
          );
          await tachyon.say_and_wait(
            "모체가 충분히 단련되지 않으면 자손의 건강에도 영향을 준다네❤",
          );
          await tachyon.say_and_wait(
            "임신을 위한 준비잖나. 적당히 봐주기는 없네, 아버님❤",
          );
        });
      }
    } else if (love >= 75 && rel > 75 && (moti >= 0 || stmn_rat > 0.45)) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                "……한 가지 생각하는 게 있다네",
              ]);
              await tachyon.say_and_wait([
                "요즘 트레이닝은 ",
                callname,
                "이(가) 보고 있다고 생각하기만 해도 묘하게 힘이 솟는단 말이지",
              ]);
              await tachyon.say_and_wait(
                "흐음…… 애정의 영향인가. 연구 주제로 나쁘지 않군. 다음에는 애정 표현의 변수를 바꿔 트레이닝 성과의 차이를 살펴보세",
              );
            },
            async () => {
              await tachyon.say_and_wait([
                "이런 말이 있다네. 트레이너란 ",
                tachyon.uma_sex_title,
                "을(를) 『길들이는』 존재라고──그래서 『길들일 순』 자에는 말 마 부수가 들어가고, 훈련의 『훈』 자와도 소리가 비슷하다는 거지",
              ]);
              await tachyon.say_and_wait([
                "그렇다면 이 나를 길들인 모르모트 군은 오늘 내게 무엇을 시키고 싶은가❤",
              ]);
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait(
                "이런～～몸 상태가 나쁜 연인을 억지로 부려 먹으며 즐길 생각인가?",
              );
              await tachyon.say_and_wait([
                '……',
                callname,
                ", 그런 사람이었다니……흑흑……",
              ]);
              await tachyon.say_and_wait(
                "쳇, 농담이야. 진지하게 받아들이지 말게…… 다만 좀 더 과격한 놀이를 원한다면 나는 상관없다네❤",
              );
            },
            async () => {
              await tachyon.say_and_wait(
                "트레이닝? 실험이 더 유익하다네…… 오늘 몫도 안 끝났는데 뭘 그리 서두르나",
              );
              await tachyon.say_and_wait(
                "이런? 봐주지 않겠다고? 후후, 그럼 수단은 마음대로 고르게. 지켜보겠네",
              );
              await tachyon.say_and_wait(
                "잠깐…… 공주님 안기라니…… 부끄럽잖나……",
              );
            },
          );
        }
      } else if (moti >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              "후우…… 가끔은 제대로 땀 흘리는 것도 나쁘지 않군. 휴식? 이 컨디션에 쉬다니 너무 아깝다네.",
            );
            await tachyon.say_and_wait([
              "잠깐, ",
              callname,
              ", 뭘…… 냄새 맡지 말게…… 지금 냄새 난단 말이야……",
            ]);
            await tachyon.say_and_wait(
              "아, 알겠네…… 돌아가서 쉴 테니 냄새 맡지 말게……",
            );
            await tachyon.say_and_wait([
              "계속해도 좋다고!? ",
              callname,
              ", 자네…… 정말 변태로군",
            ]);
            await tachyon.say_and_wait(
              "정말이지. 거기에 흥분하는 나도 변태인 게 확실하겠군❤",
            );
          },
          async () => {
            await tachyon.say_and_wait(
              "체력이 못 버티니 쉬어야 한다고?",
            );
            await tachyon.say_and_wait(
              "……이게 다 며칠 전 누구 때문인데…… 허리가 아직도 아프단 말이지……",
            );
            await tachyon.say_and_wait(
              "잠깐! ……정말이지, 허리가 아프다는 건 비유야…… 호들갑 떨지 말게…… 그렇게 걱정되나❤",
            );
          },
          async () => {
            await tachyon.say_and_wait("하아……하아……");
            await tachyon.say_and_wait(
              "아무것도 아니네. 스태미나가 바닥나려면 아직 멀었어!",
            );
            await tachyon.say_and_wait([
              "다만…… 정말 한계에 다다르면 『정』력 보충을 부탁하겠네, ",
              callname,
              '❤️',
            ]);
          },
        );
      }
    } else if (rel > 225 && (moti >= 0 || stmn_rat > 0.45)) {
      if (moti >= 0) {
        if (stmn_rat > 0.45) {
          buffer.push(
            () =>
              tachyon.say_and_wait(
                "어서, 어서! 시간은 기다려 주지 않아! 오늘 실험 데이터면 논문 다섯 편은 우려먹을 수 있겠군! 이걸로 두 달 치 연구비는 안심이야!",
              ),
            async () => {
              await tachyon.say_and_wait([
                "트레이닝? 좋네. 다만 조건이 있어.",
                callname,
                ", 오늘은 자네도 함께 달리게나?",
              ]);
              await tachyon.say_and_wait([
                "괜찮아, 괜찮아. 지금 자네 신체 능력이라면 짧게 폭발하는 동안에는 ",
                tachyon.uma_sex_title,
                "에게 뒤지지 않는 속도를 낼 수 있다네……",
              ]);
              await tachyon.say_and_wait(
                "괜찮다니까. 그래, 짧게라면 대략…… 오 초 이내일까?",
              );
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                "트레이닝? 또 운동장을 달리나…… 이봐, ",
                callname,
                ", 좀 더 재미있는 메뉴는 없나?",
              ]);
              await tachyon.say_and_wait(
                "예를 들면…… 약물 러시안룰렛? 먼저 효과를 모르는 약을 다섯 개씩 마시고 레이스를 하는 거야",
              );
              await tachyon.say_and_wait([
                "우선 함께해 줄 ",
                tachyon.uma_sex_title,
                "부터 찾으라고? ",
                call_25,
                "……이런, 안 되나?",
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                "이봐, ",
                callname,
                ", 냉정하게 분석해 보세. 매일 이렇게 단련하는 것이 정말 연구보다 효율적인가?",
              ]);
              await tachyon.say_and_wait(
                "뭐라고? 내 특별 이벤트는 한 번에 +5 정도인데 트레이닝과 비교할 자신감은 어디서 나오냐고?",
              );
              await tachyon.say_and_wait([
                "아니, 잠깐, ",
                callname,
                ", 무슨 소리를 하는 거지…… 알아듣지 못하겠군……",
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                "하아…… 트레이닝, 귀찮군. 달리고 싶으면 자네가 달리면 되잖나",
              );
              await tachyon.say_and_wait([
                "착하지, 착해라니…… 이봐, ",
                callname,
                ", 나를 어린애 취급하는 건가?",
              ]);
              await tachyon.say_and_wait(
                "뭐…… 가끔은 달려 보는 것도 나쁘지는 않을지도 모르겠군.",
              );
            },
          );
        }
      } else if (stmn_rat > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              "……빛이 보여…… 더, 더 노력하면 따라잡을 수 있어…… 바로 앞에……",
            ]),
          async () => {
            await tachyon.say_and_wait([
              callname,
              "……약을…… 어서…… 더는 못 버티겠어……",
            ]);
            await tachyon.say_and_wait(
              "아아, 그래, 그래, 이거야. 이게 없으면 살 수 없어……",
            );
            await tachyon.say_and_wait(
              "이런? 말투가 이상하다고? 그냥 영양제라네. 뭐가 이상하지? 약에 취한 것 같다고? 머릿속에 그런 생각만 가득한 사람이나 이상한 상상을 하는 거야",
            );
          },
        );
      }
    } else if (rel > 75) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            () => tachyon.say_and_wait([callname, "! 연구를 시작하지!"]),
            () =>
              tachyon.say_and_wait(
                "컨디션은 절호조! 오늘은 플랑크 시간에 필적하는 기록이 나오겠군!",
              ),
            () =>
              tachyon.say_and_wait(
                "광속을 넘을 때까지! 가능성 너머에 도달할 때까지!",
              ),
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait("……따분하군");
              await era.printAndWait([
                tachyon.get_colored_name(),
                "은(는) 혼잣말을 했다.",
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                callname,
                "……실험에는 영감이 필수라네. 성공은 99%의 노력과 1%의 영감──하지만 1%의 영감이 없다면 99%든 99.99%든 똑같이 무의미하지. 알겠나?",
              ]);
              await tachyon.say_and_wait(
                "아니, 트레이닝을 땡땡이치려고 하는 말이 아니야. 사실을 말하는 것뿐이라네, ",
              );
              await tachyon.say_and_wait(
                "다만 자네가 그렇게 말을 꺼냈으니 대입해서 생각해 봐도 좋겠군. 그러니 오늘 트레이닝은……",
              );
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 고개를 저었다",
              ]);
              await tachyon.say_and_wait("쳇");
              await era.printAndWait([
                tachyon.get_colored_name(),
                "은(는) 혀를 찼다",
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                "트레이닝? 오늘 실험도 안 끝났는데? 하아…… 좋네, 실험이 끝나면 가지",
              );
              await era.printAndWait([
                "결국 ",
                tachyon.get_colored_name(),
                "이(가) 트레이닝에 올 때까지 ",
                you.get_colored_name(),
                "은(는) 꼬박 세 시간을 기다렸고, 해가 저문 뒤에야 ",
                tachyon.sex,
                "은(는) 트레이닝장에 나타났다",
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              "하아, 하아…… 체력? 문제없네. 오늘이야말로 돌파해 보이겠어…… 하아, 하아……",
            ),
          () =>
            tachyon.say_and_wait(
              "한계까지…… 체력이 한계에 달했을 때야말로 진정한 돌파구가 보이는 거야!",
            ),
          () =>
            tachyon.say_and_wait(
              "이성은 쉬라고 명령하는데 감성은 도무지 멈추고 싶어 하지 않는군…… 행복한 고민이야, 하하하하!",
            ),
        );
      }
    } else if (stmn_rat > 0.45) {
      if (moti >= 0) {
        buffer.push(
          () => tachyon.say_and_wait("그럼 실험을 시작하겠네."),
          () =>
            tachyon.say_and_wait(
              "어서. 실험 데이터를 기록할 준비를 하게. 한눈팔지 말고.",
            ),
          async () => {
            await tachyon.say_and_wait("흥……");
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 아무 말도 하지 않았다. 하지만 ",
              you.get_colored_name(),
              "은(는) ",
              tachyon.sex,
              "에게서 넘쳐 나는 의욕을 알아볼 수 있었다.",
            ]);
          },
        );
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              "뭘 그리 느긋하게 있나. 어서 실험 데이터를 기록하게. 실수하면 가만두지 않을 테니.",
            ),
          () =>
            tachyon.say_and_wait(
              "방향이 잘못되었나…… 왜지…… 체력은 충분한데 한계를 넘을 자신만 없어……",
            ),
          async () => {
            await tachyon.say_and_wait(
              "……요즘 자네가 제안하는 실험은 갈수록 따분하군",
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 위험한 눈빛으로 ",
              you.get_colored_name(),
              "을(를) 보았다.",
            ]);
          },
        );
      }
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait("……실험을 시작하지.");
          await tachyon.say_and_wait(
            "피로? 그런 건 없어. 예감이 드는군. 이번에야말로, 이번에야말로 벽을 넘을 수 있어……",
          );
        },
        () => tachyon.say_and_wait("더 빠르게…… 큭…… 몸이…… 움직이지 않아……"),
        async () => {
          await tachyon.say_and_wait(
            "웃기지 말게…… 한계 돌파의 첫 번째 조건은 우선 한계에 도달하는 거야.",
          );
          await tachyon.say_and_wait(
            "더 빠르게. 한계에조차 이르지 못한다면…… 초월을 논할 자격도 없다네……!",
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 恋慕が熱恋以上、好感が好意以上、体力>45%、やる気高、30%で発動
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async train_kiss(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      ", 오늘은 모처럼 의욕이 나서 트레이닝하고 싶은 기분이군. 이런 담당에게 상 하나쯤 없는 건 이상하지 않나?",
    ]);
    await tachyon.say_and_wait(
      "……트레이닝이 끝나고 나서? 그렇게는 못 기다리겠군",
    );
    await tachyon.say_and_wait("음……쪽……츄릅……쪽……쪽……츕");
    await tachyon.say_and_wait(
      "후우…… 일단 합격으로 해 두지. 나머지는 트레이닝이 끝난 뒤에❤️",
    );
  },
  /**
   * 恋慕が熱恋以上、好感が好意以上、体力>45%、やる気低、30%で発動
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async train_sex(tachyon, you) {
    await tachyon.say_and_wait(
      "트레이닝? 그래…… 오늘 약부터 마시고 나서지",
    );
    await tachyon.say_and_wait(
      "온몸이 뜨겁고 의식이 흐려진다고? 괜찮네, 괜찮아. 정상적인 반응이야",
    );
    await tachyon.say_and_wait("흠…… 이제 때가 된 모양이군, ");
    await tachyon.say_and_wait(
      "오늘 약은 여성 호르몬·남성 호르몬·코르티솔·성장 호르몬·바소프레신을 평균 이상으로 높이는 약이야. 쉽게 말해 최음제라네❤️",
    );
    await tachyon.say_and_wait("트레이닝 따위는 끝난 뒤에 해도 충분해❤️");
    era.printButton("여기서는 하반신의 목소리를 따르자……", 1);
    era.printButton("「장난 그만하고, 어서 트레이닝하러 가!」", 2, {
      disabled: era.get('talent:0:钢之意志') > 0,
    });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 유혹에 넘어가 ",
        you.get_colored_name(),
        "은(는) ",
        tachyon.sex,
        "을(를) 실험실의 작은 침대에 밀어 넘어뜨렸다……",
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 익혀 둔 강철 같은 의지로 유혹을 물리쳤다",
      ]);
      await tachyon.say_and_wait("그게 가능한 건가!?");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 태클을 거는 ",
        tachyon.get_colored_name(),
        "을(를) 무시한 채 ",
        tachyon.sex,
        "을(를) 억지로 들쳐 업고 트레이닝장으로 데려갔다.",
      ]);
    }
    return ret;
  },
  tr_help_tyr: (() => {
    const title = "악행에 가담하기(?)";
    /**
     * 好感が熱意以上、やる気中〜高、体力<45%、25%で発動、周回あたり1回
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, c_call_t) => {
      await tachyon.say_and_wait([
        callname,
        ", 자신이 왜 ",
        tachyon.uma_sex_title,
        "의 힘을 이길 수 있다고 생각하는 건가?",
      ]);
      era.println();
      await era.printAndWait([
        "실험실 안에서 ",
        tachyon.get_colored_name(),
        "은(는) 재미있다는 듯 말했다",
      ]);
      await era.printAndWait("여유로운 말투에는 절대적인 자신감이 배어 있었다");
      await era.printAndWait("종족과 천부적인 재능의 차이가 준 자신감이었다");
      era.println();
      await tachyon.say_and_wait(
        "이제 알겠지. 이것이 우리의 차이야. 그러니 가능하면……",
      );
      era.println();
      await era.printAndWait([
        "아무리 힘을 줘도 꿈쩍하지 않는 몸. 저렇게 가냘픈 몸인데도──그것이 ",
        tachyon.uma_sex_title,
        "라는 생물의 신비로움이었다",
      ]);
      !you.race &&
        (await era.printAndWait("하지만…… 인간에게도 자존심이라는 것이 있다"));
      era.println();
      await tachyon.say_and_wait(
        "이런? 아직 힘이 남았나? 후후, 끈기만큼은 인정하지. 다만 칭찬해 줄 수 있는 것은 거기까지라네",
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) ",
        you.get_colored_name(),
        "의 헛수고를 비웃었다. 하지만 싫증을 잘 내는 ",
        tachyon.sex,
        "에게는 ",
        you.get_colored_name(),
        "이(가) 똑같은 헛수고를 반복하는 모습도 슬슬 따분해지고 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        "……저항은 그만두게. 알고 있을 텐데. 이 저항이 헛수고에 불과하다는 걸. 그래……",
      ]);
      era.println();
      await era.printAndWait([
        "아아, ",
        tachyon.sex,
        "은(는) 모든 트레이너를 나락으로 떨어뜨릴 만한 선언을 내뱉었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "아무리 잡아당겨도 나는 절대 트레이닝하러 가지 않겠어",
      );
      era.println();
      await era.printAndWait("즉, 그런 것이다");
      await era.printAndWait([
        "트레이닝을 거부하는 ",
        tachyon.get_colored_name(),
        "와(과) 오늘만큼은 안 된다며 물고 늘어지는 ",
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        "의자를 붙잡고 ",
        you.get_colored_name(),
        "에게 끌려가지 않으려는 쪽과, 허리를 잡고 실험대에서 떼어 내려는 ",
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        "그렇다. 두 사람 사이에서 벌어지는 더없이 시시한 줄다리기였다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ", 포기하게. 인간이 해낼 수 있을 리가…… 아얏!?",
      ]);
      era.println();
      await era.printAndWait([
        "우쭐해진 ",
        tachyon.sex,
        "은(는) 잊은 모양이었다. ",
        tachyon.sex,
        "의 개조 덕분에 ",
        you.get_colored_name(),
        "은(는) 이미 ",
        tachyon.uma_sex_title,
        "와(과) 동등하지는 않아도 칠팔 할에 이르는 힘을 지니고 있다는 것을",
      ]);
      await era.printAndWait([
        "그 괴력에 ",
        tachyon.get_colored_name(),
        "의 오만과 방심까지 더해지자 ",
        you.get_colored_name(),
        "은(는) 손쉽게 ",
        tachyon.get_colored_name(),
        "의 하반신을 통째로 들어 올렸다. 남은 것은 실험대를 붙잡은 ",
        tachyon.sex,
        "의 두 손뿐이었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "아…… 아직 자네를 얕보고 있었던 모양이군, ",
        callname,
        "……하지만 다시는 방심하지 않겠어. 두 손으로 실험대만 붙잡고 있어도 이 아그네스 타키온은 실험실 안에서는 무적이라네! 크후후…… 크하하하하하하! ……우왓!?",
      ]);
      era.println();
      await era.printAndWait([
        "이 시시한 전쟁이 십 분에서 이십 분은 더 이어지리라 생각한 바로 그때, 이상한 일이 일어났다",
      ]);
      await era.printAndWait([
        "알 수 없는 힘이 깃든 듯 ",
        tachyon.get_colored_name(),
        "에게 실험대 전체가 갑자기 용암처럼 뜨거워졌고, ",
        tachyon.sex,
        "은(는) 손을 놓을 수밖에 없었다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "와(과) ",
        you.get_colored_name(),
        "은(는) 나란히 넘어졌다.",
        tachyon.get_colored_name(),
        "은(는) 일어나자마자 황급히 손을 살폈지만 그을린 자국 하나 없었다. 착각이었던 것처럼",
      ]);
      era.println();
      await coffee.say_and_wait([
        "……빨리 ",
        c_call_t,
        "을(를) 데려가 주세요……",
        tachyon.sex,
        ", 시끄러워요……",
      ]);
      era.println();
      await era.printAndWait([
        "입을 연 것은 ",
        tachyon.get_colored_name(),
        "와(과) 같은 빈 교실을 쓰는, 영적인 현상과 가까운 검은 머리의 ",
        tachyon.uma_sex_title,
        '、',
        coffee.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        "상대가 어떻게 ",
        tachyon.get_colored_name(),
        "의 손을 놓게 했는지는 알 수 없었다. 하지만 ",
        tachyon.sex,
        "이(가) 다시 실험실에 눌러앉을 틈을 주지 않으려고 ",
        you.get_colored_name(),
        "은(는) 인사도 뒤로 미룬 채 ",
        tachyon.get_colored_name(),
        "을(를) 붙잡고 트레이닝장으로 서둘렀다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  tr_incm_cmb: (() => {
    const title = "불완전 연소";
    /**
     * やる気低、体力<45%、男T×ウマ娘
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait("오늘 목표는……");
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 걱정스럽게 ",
        tachyon.get_colored_name(),
        "의 상태를 살폈다",
      ]);
      await era.printAndWait([
        "오늘도 ",
        tachyon.sex,
        "은(는) 한계를 넘기 위한 실험──다시 말해 트레이닝──을 계속하고 있었다",
      ]);
      await era.printAndWait([
        "만약 ",
        tachyon.sex,
        "의 체력이 충분하고 컨디션만 나빴다면 ",
        you.get_colored_name(),
        "은(는) 마음을 독하게 먹고 실험을 시켰을 것이다. 때로는 엄격함도 필요하니까",
      ]);
      await era.printAndWait([
        "만약 ",
        tachyon.sex,
        "의 체력이 부족해도 의욕이 넘쳤다면 ",
        you.get_colored_name(),
        "은(는) 고민 끝에 ",
        tachyon.sex,
        "에게 계속 단련하게 했을 것이다.",
      ]);
      await era.printAndWait([
        "선배 트레이너들도 말했다. ",
        tachyon.uma_sex_title,
        "의 마음에 귀를 기울이는 것이야말로 트레이너의 가장 중요한 일이라고",
      ]);
      await era.printAndWait("하지만……");
      era.println();
      era.print([
        "체력이 명백히 버티지 못하고 정신마저 딴 데 가 있는 ",
        tachyon.sex,
        "에게 ",
        you.get_colored_name(),
        "은(는) 정말 냉정해질 수 있을까?",
      ]);
      era.printButton("「……계속하자」(순종 인자+100)", 1);
      era.printButton("「……쉬자」(의욕 상승)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 목표와 꿈을 위해…… 그리고 자신의 아주 조금의 사심을 위해",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 지금의 ",
          tachyon.get_colored_name(),
          "을(를) 바라보았다",
        ]);
        await era.printAndWait([
          "땀에 젖은 운동복 사이로 비치는 흰 피부와 달리며 튄 진흙 얼룩이 선명한 대조를 이루고, 달라붙은 옷은 ",
          tachyon.sex,
          "의 몸을 한층 더 도드라지게 했다",
        ]);
        await era.printAndWait(
          "둥근 가슴과 엉덩이, 지친 숨소리와 붉어진 뺨. 그저 트레이닝일 뿐인데 상상은 멋대로 달려 나갔다",
        );
        await era.printAndWait(
          "계속 흔들리는 저 곡선을 내 것으로 삼아 손안에서 마음껏 주무를 수 있다면",
        );
        await era.printAndWait(
          "평소 쌀쌀맞은 저 입을 입술과 혀로 막아 달콤한 숨소리밖에 내지 못하게 할 수 있다면",
        );
        await era.printAndWait(
          "트레이너로서, 한 사람의 어른으로서 용납될 리 없는 생각이었다",
        );
        await era.printAndWait([
          "하지만 남자로서의 욕망은 ",
          you.get_colored_name(),
          "에게 반대를 허락하지 않았다",
        ]);
        await era.printAndWait([
          "망설이고 안타까워하면서도 ",
          you.get_colored_name(),
          "은(는) ",
          tachyon.sex,
          "의 불편한 상태를 못 본 척하며 트레이닝을 계속하게 했다",
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          "의 불순한 속내를 알아차렸는지, 아니면 트레이닝을 계속하는 것 자체가 마음에 안 들었는지 ",
          tachyon.get_colored_name(),
          "은(는) 아무 말 없이도 ",
          you.get_colored_name(),
          "을(를) 한 번 노려보았다",
        ]);
      } else {
        await era.printAndWait(
          "트레이너로서 무리한 과잉 트레이닝은 피해야 한다",
        );
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "이(가) 한 바퀴를 마치자마자 중단을 알렸다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "……끝인가? 실험은 이제 막 시작했는데. 오늘 할 대조 실…… 실험이 아직…… 앗……",
        );
        await era.printAndWait([
          tachyon.sex,
          "의 강한 말투가 중간에 끊기고 참지 못한 숨소리가 새어 나왔다",
        ]);
        await era.printAndWait(
          "누가 상상했을까. 종아리 안쪽을 살짝 눌렀을 뿐인데 그토록 강하던 입에서 이런 달콤한 소리가 나오리라고",
        );
        await era.printAndWait([
          "물론 ",
          you.get_colored_name(),
          "의 지압에 곧바로 발정시키는 마법이 있는 것은 아니다. 주된 원인은 ",
          tachyon.get_colored_name(),
          "자신에게 있었다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 이미 힘이 풀린 ",
          tachyon.get_colored_name(),
          "을(를) 부축하며 붓기 시작한 ",
          tachyon.sex,
          "의 종아리를 부드럽게 눌렀다",
        ]);
        era.println();
        await tachyon.say_and_wait("……음……아……그렇게……안 돼……그만……앙……");
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "의 입에서 취할 듯한 교성이 끊이지 않았다",
        ]);
        await era.printAndWait([
          "흰 피부는 이미 붉게 물들었고 누르는 곳이 바뀔 때마다 ",
          tachyon.sex,
          "은(는) 상상을 자극하는 소리를 냈다. 마치 ",
          you.get_colored_name(),
          "이(가) 하는 것은 건전한 마사지가 아니라 더 사악하고 천박한 행위라도 되는 것 같았다",
        ]);
        await era.printAndWait([
          "신성한 경기장에서 그러고 있으니 당연히 시선이 모였다. 어느새 아직 트레이닝 중이던 나이 어린 ",
          tachyon.uma_sex_title,
          "들도 ",
          tachyon.get_colored_name(),
          "의 교성에 이끌려 모여들고 있었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "잠깐……",
          callname,
          "……아……안 돼……사람이……아아～～♡",
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 못 들은 척하며 계속 눌렀다",
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 다리는 ",
          you.get_colored_name(),
          "의 상상보다 더 가늘고 부드러웠다. 가볍게 쥔 감촉은 ",
          you.get_colored_name(),
          "에게 ",
          tachyon.sex,
          "의 생사여탈권을 쥐었다는 착각을 안겨 주었다",
        ]);
        await era.printAndWait([
          "침대 위에서 불만스러워하면서도 신음을 참지 못하는 ",
          tachyon.sex,
          "을(를) 보며 두 다리를 붙잡아 벌린다면──그 정복감은 세상 무엇보다 강하리라",
        ]);
        era.println();
        await tachyon.say_and_wait("……! 거기는 안 돼!");
        era.println();
        await era.printAndWait([
          "어느새 열기를 띤 ",
          you.get_colored_name(),
          "의 손은 허벅지 쪽으로 올라가 있었다",
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          "이(가) 두 다리를 힘껏 빼내는 힘이 ",
          you.get_colored_name(),
          "의 이성을 되찾아 주었다. 눈앞의 ",
          tachyon.teen_sex_title,
          "은(는) 사실 성인 남성의 세 배 힘을 지닌 ",
          tachyon.uma_sex_title,
          "이라는 사실을",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 황급히 ",
          tachyon.sex,
          "에게 사과했다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "……아, 알겠네…… 오늘은 여기까지…… 나, 나는 조금 쉬어야겠어……",
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 빠르게 말을 마치고 실험실로 돌아가려 했지만 힘이 풀린 무릎이 꺾이며 ",
          you.get_colored_name(),
          "의 품으로 쓰러졌다",
        ]);
        await era.printAndWait([
          "지금의 두 사람은 정상적으로 트레이닝 중인 트레이너와 ",
          tachyon.uma_sex_title,
          "로 보이지 않았다. 연인의 품에 기대는 여자친구와 다정하게 ",
          tachyon.sex,
          "을(를) 안아 주는 반려자──그렇게 보였을 것이다",
        ]);
        await era.printAndWait([
          "사람들이 두려워하는 광기의 과학자는 지금 작은 새처럼 ",
          you.get_colored_name(),
          "에게 기대고 있었다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 저도 모르게 자랑스러움과 뿌듯함을 느꼈다",
        ]);
        era.println();
        await tachyon.say_and_wait("……실험실로 데려다주게. 지금 당장");
        era.println();
        await era.printAndWait([
          "하지만 곧 과학자가 노려보자 ",
          you.get_colored_name(),
          "은(는) 다시 얌전한 모르모트가 되었다",
        ]);
        await era.printAndWait([
          "그렇게 두 사람은 주변 ",
          tachyon.uma_sex_title,
          "들의 반은 감탄, 반은 부러움이 섞인 시선을 받으며 실험실로 돌아갔다",
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
   * @param stmn_rat アグネスタキオンの体力割合
   * @param plan_b Plan B に入っているか
   */
  async train_success(tachyon, you, callname, call_25, stmn_rat, plan_b) {
    era.print([
      tachyon.get_colored_name(),
      "의 훈련이 무사히 끝났다!",
    ]);
    era.println();
    const buffer = [];
    if (plan_b && era.get('cflag:32:育成回合计时') < 95 + 16) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([' ', call_25, "을(를)…… 한 단계 더 높이"]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 유난히 힘을 쏟아 트레이닝을 마쳤다. 하지만 ",
            tachyon.sex,
            "이(가) 내뱉는 구호에는 어떻게 반응해야 할지 모르겠다",
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            "내가 노력하지 않으면 ",
            call_25,
            "을(를) 따라잡을 수 없어……",
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 트레이닝을 마쳤다",
          ]);
          await era.printAndWait("달리기는 여전히 눈부시다");
          await era.printAndWait("하지만 어딘가 빠진 것 같은 기분이 든다");
        },
        async () => {
          await tachyon.say_and_wait("실험의 성공을 위해…… 나라도……");
          era.println();
          await era.printAndWait([
            "트레이닝을 마친 ",
            tachyon.get_colored_name(),
            "은(는) 중얼거렸다. 말은 그렇게 해도 ",
            tachyon.sex,
            "의 어조에는 망설임이 섞인 듯했다",
          ]);
          await era.printAndWait([
            "……아니, 그건 ",
            you.get_colored_name(),
            "의 지나친 해석일지도 모른다",
          ]);
        },
      );
    } else if (era.get('love:32') >= 75) {
      if (stmn_rat > 0.45) {
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '！']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 트레이닝을 마치자 땀범벅인 것도 아랑곳하지 않고 ",
            you.get_colored_name(),
            "에게 달려들었다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 황급히 ",
            tachyon.sex,
            "을(를) 밀어내려 했다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "괜찮네, 연인의 체액이잖나…… 밤에 자네 체액으로 돌려받으면 그만이지♡",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) ",
            you.get_colored_name(),
            "의 반대를 무시하고 껴안으며 ",
            you.get_colored_name(),
            "의 귓가에 속삭였다",
          ]);
        });
      } else {
        buffer.push(async () => {
          await tachyon.say_and_wait(
            "후우…… 트레이닝이 끝났군…… 드디어",
          );
          await tachyon.say_and_wait(
            "정말이지…… 운동이라면 그냥 달리는 것보다 밤에 하는 쪽이 좋다네……",
          );
          await tachyon.say_and_wait([
            "어떤가? ",
            callname,
            ", 만족시켜 주겠지♡",
          ]);
        });
      }
    } else if (era.get('love:32') >= 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait("흐흥, 어떤가");
          await tachyon.say_and_wait(
            "또 내게 매료되었나? 후후, 호들갑이군",
          );
          await tachyon.say_and_wait("하지만 싫지는 않아♡");
        },
        async () => {
          await tachyon.say_and_wait([callname, '！ ', callname, "………아"]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 평소처럼 ",
            you.get_colored_name(),
            "에게 달려가려다가 문득 걸음을 멈췄다",
          ]);
          era.println();
          await tachyon.say_and_wait("………아니, 지금은 그만두지");
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 땀에 흠뻑 젖은 운동복을 보고 어째서인지 ",
            you.get_colored_name(),
            "와(과) 거리를 두었다",
          ]);
          await era.printAndWait("설마…… 냄새를 신경 쓰는 건가?");
          await era.printAndWait([
            "아니, 그 ",
            tachyon.get_colored_name(),
            "이(가)…… 그럴 리 없을 텐데",
          ]);
        },
      );
    } else if (era.get('relation:32:0') > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            "흐흥흐흥, ",
            callname,
            ", 오늘 달리기는 어땠나! 과하게 칭찬해도 좋다네!",
          ]);
          era.println();
          await era.printAndWait("삼십 분 뒤");
          era.println();
          await tachyon.say_and_wait("………그렇게까지 칭찬하지 않아도……");
        },
        async () => {
          await tachyon.say_and_wait("후우…… 피곤하군……");
          await tachyon.say_and_wait([
            callname,
            "……업어서 데려다주게～～～～",
          ]);
        },
        async () => {
          await tachyon.say_and_wait("이대로라면…… 반드시 닿을 수 있어");
          await tachyon.say_and_wait("한계라는 목표에……");
        },
      );
    } else if (era.get('relation:32:0') > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            "흥…… 이 속도를 꾸준히 높여 나가면 한계 초월은 확실하겠군",
          );
          await tachyon.say_and_wait([
            "……그렇게 서두르지 말고 조금 쉬어도 된다고? ",
            callname,
            ", 연구는 멈추면 퇴보라네. 자신을 높이려면 한순간도 느슨해져서는 안 돼",
          ]);
        },
        async () => {
          await tachyon.say_and_wait("후하하하! 그래, 이 속도야!");
          await tachyon.say_and_wait(
            "더 빠르게, 더 빠르게, 마침내…… 광속을 넘을 때까지!",
          );
        },
        () =>
          tachyon.say_and_wait(
            "기록을 보여 주게…… 흐흥흐흥…… 좋아. 이대로라면 우리의 꿈도 멀지 않았군!",
          ),
      );
    } else if (era.get('relation:32:0') > 75) {
      buffer.push(
        () => tachyon.say_and_wait("좋아, 오늘 달리기는 최적해로군!"),
        () =>
          tachyon.say_and_wait([
            "후우……",
            callname,
            ", 데이터를 보여 주게…… 후후, 좋아, 좋아. 지난 트레이닝보다 크게 올랐군. 이대로라면 문제없겠어",
          ]),
        () =>
          tachyon.say_and_wait(
            "좋아, 좋아, 연구 진척도가 또 0.02포인트 올랐군",
          ),
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            "후우, 그렇군…… 오늘 실험 성과는 나쁘지 않아",
          ),
        () =>
          tachyon.say_and_wait(
            "이렇게 간단한 트레이닝은 손쉽게 끝낼 수 있지…… 실력 측정을 위한 대조군이라고?",
          ),
        () => tachyon.say_and_wait("당연한 성과라네"),
      );
    }
    await get_random_entry(buffer)();
  },
  ts_add_high_rel: (() => {
    const title = "추격전";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '！ ', tachyon.sex, "을(를) 붙잡아 주게!"]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 오늘 트레이닝은 막 끝난 참이었다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 손을 흔들어 ",
        tachyon.get_colored_name(),
        "을(를) 부르려던 순간 ",
        tachyon.get_colored_name(),
        "이(가) 어느 ",
        tachyon.uma_sex_title,
        "을(를) 쫓아 ",
        you.get_colored_name(),
        "쪽으로 달려오는 모습이 보였다",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        `${tachyon.uma_sex_title}A`,
        "사, 살려 주세요!",
      );
      await tachyon.say_and_wait(
        "무서워하지 말게…… 괜찮아! 잠깐 시간을 내어 조사 몇 가지, 질문 몇 가지, 그리고…… 그리고…… 약도 조금 시험해 주면……!",
      );
      era.println();
      await era.printAndWait([
        "그 ",
        tachyon.uma_sex_title,
        "은(는) ",
        you.get_colored_name(),
        "에게 점점 가까워지고 있었다",
      ]);
      era.print([you.get_colored_name(), "은(는) 결정했다……"]);
      era.printButton("둘을 그냥 보낸다", 1);
      era.printButton("타키온을 막는다", 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          "트레이너",
          you.adult_sex_title,
          ", 왜 보고만 있는 거예요!?",
        ]);
        await tachyon.say_and_wait([
          callname,
          ", 왜 ",
          tachyon.sex,
          "을(를) 막아 주지 않는 건가!?",
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 옆으로 비켜 둘을 보냈다",
        ]);
        await era.printAndWait(
          "동시에 두 사람의 항의가 터졌다. 하지만 내용은 정반대였다",
        );
        await era.printAndWait([you.get_colored_name(), "은(는) 어깨를 으쓱했다"]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 방식이 좋지 않다는 것은 안다. 하지만 ",
          tachyon.sex,
          "의 모르모트인 이상 실험도 도와야 한다",
        ]);
        await era.printAndWait("……진퇴양난이다");
        await era.printAndWait([
          "그래서 ",
          you.get_colored_name(),
          "은(는) 생각을 그만두고 어느 쪽 편도 들지 않기로 했다",
        ]);
        era.drawLine();
        await era.printAndWait([
          "다음 날 ",
          you.get_colored_name(),
          "이(가) 실험실에 왔을 때 평소 책상에 놓인 자신의 약이 두 배로 늘어 있었다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) ",
          tachyon.get_colored_name(),
          "을(를) 보자 ",
          tachyon.sex,
          "은(는) 무표정하게 ",
          you.get_colored_name(),
          "을(를) 바라보고 있었다",
        ]);
        await era.printAndWait("…………결국 피해자는 자신이었다");
      } else {
        await era.printAndWait("실험의 옳고 그름은 일단 제쳐 두자");
        await era.printAndWait([
          "오늘 트레이닝으로 ",
          tachyon.get_colored_name(),
          "은(는) 이미 충분히 달렸다. 더 뛰면 몸을 상할 수 있다",
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          "트레이너",
          you.adult_sex_title,
          "! 감사합니다!",
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "을(를) 붙잡았다",
        ]);
        await era.printAndWait([
          "나이 어린 ",
          tachyon.uma_sex_title,
          "은(는) 멀어져 갔고, ",
          tachyon.get_colored_name(),
          "은(는) 이제 따라잡을 수 없음을 깨닫자 원망스럽게 ",
          you.get_colored_name(),
          "을(를) 노려보았다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 가슴에 불길한 예감이 스쳤다",
        ]);
        era.drawLine();
        await era.printAndWait([
          "다음 날 ",
          you.get_colored_name(),
          "이(가) 실험실에 왔을 때 평소 책상에 놓인 자신의 약이 두 배로 늘어 있었다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) ",
          tachyon.get_colored_name(),
          "을(를) 보자 ",
          tachyon.sex,
          "은(는) 무표정하게 ",
          you.get_colored_name(),
          "을(를) 바라보고 있었다",
        ]);
        await era.printAndWait("……………어제 예감이 맞았다");
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ts_add_low_rel: (() => {
    const title = "추가 실험";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await tachyon.say_and_wait(
        "부족해. 실험 데이터가 아직 산더미처럼 모자라……",
      );
      await tachyon.say_and_wait(
        "계속해야 해…… 계속하기 싫다면 돌아가게. 나 혼자 할 테니",
      );
      era.println();
      era.print([you.get_colored_name(), "은(는) 결정했다"]);
      era.printButton("맡겨 둔다", 1);
      era.printButton("막는다", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          "그저 추가 트레이닝일 뿐이었다면 막을 수 있었을지도 모른다",
        );
        await era.printAndWait("하지만 실험 데이터가 부족하다면……");
        era.println();
        await you.say_and_wait("확실히 치명적이겠지…… 그럼 오늘은 좀 더 남자");
        await tachyon.say_and_wait(
          "……돌아가라고 했을 텐데. 추가 트레이닝이 아니야. 내 실험에 데이터가 필요한 것뿐이지",
        );
        you.say("그래, 그러니까");
        era.printButton("「실험에는 조수가 있어야지」", 1);
        era.printButton(
          "「트레이너로서가 아니라 퇴근 후 자유 시간이야. 어떻게 쓰든 내 마음이지?」",
          2,
        );
        await era.input();
        await tachyon.say_and_wait("…………후후");
        await tachyon.say_and_wait("그럼 데이터 기록을 부탁하겠네");
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 고개를 끄덕이고 ",
          tachyon.sex,
          "이(가) 다시 달려 나가는 모습을 지켜보았다",
        ]);
      } else {
        await era.printAndWait("안 된다");
        await era.printAndWait(
          "명목이 무엇이든 추가 트레이닝은 허락할 수 없다",
        );
        await era.printAndWait([
          "게다가 ",
          tachyon.get_colored_name(),
          "도 알고 있을 것이다. 이렇게 해도 효율은 오르지 않는다. 무리하게 진도를 서두르면 오히려 실수만 늘어난다",
        ]);
        era.println();
        await tachyon.say_and_wait("…………쳇");
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 아무 말 없이 돌아갔다",
        ]);
        await era.printAndWait([
          "논리적으로 설득하면 순순히 듣는다. 그것도 ",
          tachyon.sex,
          "의 장점일 것이다",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = "재정비와 재출발";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     * @param {boolean} reg_toky_yus 日本ダービーに出走登録しているか
     * @param {number} fail_count 愛欲以上でトレーニング失敗した回数
     * @param {boolean} fail_again 努力を選んだ場合に再失敗するか
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      plan_b,
      reg_toky_yus,
      fail_count,
      fail_again,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 트레이닝 코스를 달리는 ",
        tachyon.get_colored_name(),
        "을(를) 지켜보고 있었다",
      ]);
      await era.printAndWait([
        "어째서인지 ",
        you.get_colored_name(),
        "은(는) 계속 마음이 놓이지 않았다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 달리기에는 겉보기엔 문제가 없었다. 그런데도 걱정이 가시지 않았다",
      ]);
      await era.printAndWait([
        "사고만은 나지 않기를, ",
        you.get_colored_name(),
        "은(는) 그렇게 빌었다",
      ]);
      era.println();
      await era.printAndWait("하지만 불길한 예감은 빗나가지 않았다");
      await era.printAndWait([
        you.get_colored_name(),
        "의 눈앞에서 ",
        tachyon.get_colored_name(),
        "의 발걸음이 휘청거렸다",
      ]);
      era.print("이대로라면 넘어지겠는데————");
      era.printButton("「타키온! 멈춰!」(실패를 받아들인다)", 1);
      era.printButton("—————!(만회를 시도한다)", 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:32') >= 50) {
          switch (fail_count) {
            case 0:
              await tachyon.say_and_wait([
                "아파……",
                callname,
                ", 좀 눌러 주겠나?",
              ]);
              era.println();
              await era.printAndWait([
                "넘어진 ",
                tachyon.get_colored_name(),
                "에게 달려간 ",
                you.get_colored_name(),
                "은(는) 재빨리 ",
                tachyon.sex,
                "의 신발과 양말을 벗겼다",
              ]);
              era.println();
              await tachyon.say_and_wait("그래…… 발등…… 발바닥……");
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 살며시 ",
                tachyon.sex,
                "의 발에 있는 혈자리를 눌렀다",
              ]);
              await era.printAndWait("원래라면 지극히 평범한 행동일 것이다");
              await era.printAndWait(
                "하지만…… 막 달리고 온 데다 양말 속에서 뜸이 든 발바닥은 땀으로 축축했다",
              );
              await era.printAndWait([
                you.get_colored_name(),
                "이(가) 마사지를 할수록 끈적한 땀이 ",
                you.get_colored_name(),
                "의 두 손에도 묻어났다",
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 그저 인체의 분비물일 뿐이라고 스스로를 타일렀다",
              ]);
              await era.printAndWait(
                "그런데도 손길은 저절로 부드러워졌다",
              );
              era.println();
              await tachyon.say_and_wait("응…… 으……");
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "이(가) 이따금 흘리는 숨소리는 ",
                you.get_colored_name(),
                "을(를) 더욱 흥분시켰다",
              ]);
              await era.printAndWait([
                "발바닥과 발등을 눌러 줬으면 이제 손을 멈추는 게 맞았다. 하지만 손은 아직 다른 생각이 있는 모양이었다",
              ]);
              era.println();
              await tachyon.say_and_wait("잠깐…… 발끝은……");
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "의 손가락이 천천히 ",
                tachyon.sex,
                "의 발가락을 쥐었다",
              ]);
              await era.printAndWait("보통 지압을 할 때는 오일을 바르기 마련이다");
              await era.printAndWait([
                "하지만 ",
                tachyon.get_colored_name(),
                "에게서 흘러내리는 땀이 오일을 대신했다",
              ]);
              era.println();
              await tachyon.say_and_wait(["잠깐……", callname, "……아얏!"]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "의 부름에 ",
                you.get_colored_name(),
                "은(는) 이성을 되찾았다",
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                "이(가) 고개를 들자 ",
                tachyon.sex,
                "의 뺨은 발갛게 달아올라 있었다. 스위치가 켜진 것처럼 보였다",
              ]);
              era.println();
              await tachyon.say_and_wait(
                "……계속하는 건 안으로 돌아간 다음으로 하지. 알겠나?",
              );
              break;
            case 1:
              await tachyon.say_and_wait("아파～～♡");
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "은(는) 오늘 트레이닝에서도 또 「실수로」 넘어졌다",
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 잔디에 닿자마자 신발과 양말부터 벗으려 드는 ",
                tachyon.sex,
                "을(를) 보고 반쯤은 욕정이 일고 반쯤은 어이가 없었다",
              ]);
              era.println();
              await tachyon.say_and_wait([
                callname,
                "～～어서 마사지해 주게……♡♡",
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "이(가) 움직이지 않자 ",
                tachyon.sex,
                "은(는) 응석을 부리듯 맨발로 잔디를 밟으며 ",
                you.get_colored_name(),
                "의 시선을 끌었다",
              ]);
              await era.printAndWait(
                "희고 가느다란 맨발은 금방이라도 부서질 듯한 예술품 같았다. 튄 흙이 오히려 그 흰빛을 돋보이게 했다",
              );
              era.println();
              await tachyon.say_and_wait("어서, 어서 주물러 주게～～");
              era.println();
              await you.say_and_wait(
                "이 나쁜 버릇을 계속 두고 볼 수는 없다……",
                true,
              );
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 부드럽게 ",
                tachyon.sex,
                "의 발을 눌렀다",
              ]);
              era.println();
              await tachyon.say_and_wait("으응♡～～그래…… 아♡앗♡하♡");
              era.println();
              await era.printAndWait("여전히 교태 어린 목소리였다");
              await era.printAndWait([
                tachyon.get_colored_name(),
                "이(가) 입을 열 때마다 ",
                you.get_colored_name(),
                "의 욕정을 부추기는 교성이 흘러나왔다",
              ]);
              await era.printAndWait([
                "이대로 ",
                tachyon.sex,
                "을(를) 내버려 둘 수는 없다",
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 손으로 누르는 방식을 바꿨다",
              ]);
              era.println();
              await tachyon.say_and_wait([callname, "……아———"]);
              era.println();
              await era.printAndWait("조금 전까지 부드럽게 어루만지던 손길이");
              await era.printAndWait(
                "순식간에 발을 으스러뜨릴 듯한 거센 압박으로 변했다",
              );
              era.println();
              await tachyon.say_and_wait([
                "아파! 잠깐, ",
                callname,
                "! 안 돼! 그만! 부러지겠어, 아아아아아!",
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) ",
                tachyon.sex,
                "의 말에 아랑곳하지 않고 힘껏 누르기를 계속했다",
              ]);
              await era.printAndWait([
                tachyon.uma_sex_title,
                "을(를) 마사지하는 법과 그 힘 조절에 관해서는 트레이너보다 잘 아는 사람이 없다",
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 뼈가 부러지지는 않으면서도 ",
                tachyon.get_colored_name(),
                "이(가) 아픔을 느낄 만한 선에서 마음껏 눌렀다",
              ]);
              era.println();
              await tachyon.say_and_wait(
                "잠깐, 내가 잘못했네! 제발! 살려 주게! 싫어! 놔줘! 안 돼! 흣………!",
              );
              await tachyon.say_and_wait("흣…… 하…… 하아…… 하……");
              era.println();
              await era.printAndWait([
                "얼마 지나지 않아 ",
                tachyon.get_colored_name(),
                "은(는) 말도 못 하고 아픔에 겨운 숨만 내쉬었다",
              ]);
              await era.printAndWait([
                "아직 부족하다. ",
                tachyon.sex,
                "에게 확실히 교훈을 새겨 줘야 한다",
              ]);
              era.println();
              await tachyon.say_and_wait("응…… 흣…… 하아…… 응♡");
              await tachyon.say_and_wait("으♡응…… 하아♡");
              era.println();
              await era.printAndWait("……착각인가");
              await era.printAndWait([
                tachyon.get_colored_name(),
                "의 목소리가 어딘가 달라진 것 같았다",
              ]);
              await era.printAndWait([
                "그만둘 때를 아는 ",
                you.get_colored_name(),
                "은(는) ",
                tachyon.sex,
                "이(가) 이쯤이면 배웠으리라 판단하고 힘을 풀었다",
              ]);
              era.println();
              await tachyon.say_and_wait("으～～～～～");
              await tachyon.say_and_wait(
                "방금까지 그렇게 아팠는데, 갑자기 부드러워지면…………",
              );
              await tachyon.say_and_wait("안 돼…… 잠깐…… 이제…… 더는 안 돼……♡");
              era.println();
              await era.printAndWait(
                "……나는 그저 마사지를 하고 있을 뿐일 텐데",
              );
              await era.printAndWait("얼마 후 마사지가 끝났다");
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 어째서인지 온몸에 힘이 풀린 ",
                tachyon.get_colored_name(),
                "을(를) 데리고 기숙사로 돌아갔다",
              ]);
              await era.printAndWait([
                "이제 ",
                tachyon.sex,
                "도 교훈을 얻었겠지",
              ]);
              era.println();
              await era.printAndWait("…………얻었겠지, 아마?");
              break;
            case 2:
              await tachyon.say_and_wait([
                "응～～",
                callname,
                ", 마사지해 주게～～",
              ]);
              await tachyon.say_and_wait("……그쪽 말일세♡");
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "은(는) 제 두 다리를 쓰다듬으며 의미심장하게 ",
                you.get_colored_name(),
                "에게 말했다",
              ]);
              await era.printAndWait("이 녀석…… 역시 반성하지 않았다");
              await era.printAndWait([
                "이번에야말로 정말 ",
                tachyon.sex,
                "에게 교훈을 새겨 줘야 한다",
              ]);
              await era.printAndWait([
                "…………그런데 내 「교훈」이 ",
                tachyon.sex,
                "에게는 다른 의미의 포상이 되고 있는 건 아닐까?",
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 황급히 그 생각을 떨쳐 냈다",
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                "이(가) 그 정도까지 타락했을 리는 없다",
              ]);
              await era.printAndWait("…………없겠지?");
              break;
            case 3:
              await tachyon.say_and_wait(["아파……", callname]);
              await tachyon.say_and_wait("아니, 다리는 괜찮네……");
              await tachyon.say_and_wait(
                "하지만 누군가의 하반신이 무사한지는 모르겠군",
              );
              await tachyon.say_and_wait(
                "내가 양말을 벗는 걸 보고 갑자기 허리를 숙인 건 왜인가♡",
              );
              await tachyon.say_and_wait("다치기라도 했으면 큰일이니…… 어디 보여 주게♡");
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "의 말에 ",
                you.get_colored_name(),
                "은(는) 그 자리에서 굳어 버렸다",
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                "의 상태를 살피러 가고 싶었지만 ",
                tachyon.sex,
                "이(가) 정말 무슨 짓을 할까 두려웠다",
              ]);
              era.println();
              await tachyon.say_and_wait("흠…… 안 오는 건가? 아쉽군～～");
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "은(는) 먼지를 털고 스스로 일어났다",
              ]);
              await era.printAndWait("이 녀석…… 역시 연기였다");
          }
        } else {
          const buffer = [];
          if (era.get('relation:32:0') > 525) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([
                  "일어설 수가 없네……",
                  callname,
                  ", 업어 주게～～",
                ]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  "은(는) ",
                  you.get_colored_name(),
                  "의 목소리를 듣자마자 잔디에 털썩 주저앉았다",
                ]);
                await era.printAndWait([
                  "촉촉한 눈으로 ",
                  you.get_colored_name(),
                  "을(를) 부르며 졸랐다",
                ]);
                await era.printAndWait([
                  "원래 ",
                  tachyon.sex,
                  "이(가) 이렇게 응석쟁이였던가……?",
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 어이없어하면서도 오늘은 더 이상 계속할 수 없겠다고 인정했다",
                ]);
              },
              async () => {
                await tachyon.say_and_wait("정말이지…… 더 달릴 수 있었는데……");
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  "이(가) ",
                  tachyon.get_colored_name(),
                  "의 두 다리를 살피고 있자 ",
                  tachyon.get_colored_name(),
                  "은(는) 볼을 부풀리며 말했다",
                ]);
                era.println();
                await you.say_and_wait(
                  "그래도 타키온을 그런 위험에 빠뜨릴 수는 없어…… 타키온(의 다리)은 내게 무엇보다 소중하니까",
                );
                await tachyon.say_and_wait("!…………그렇게까지 말한다면야");
                era.println();
                await era.printAndWait([
                  "어째서인지 ",
                  tachyon.get_colored_name(),
                  "의 얼굴이 붉어졌다",
                ]);
                await era.printAndWait("검사에 응해 준 건 고마운 일이다");
              },
              async () => {
                await tachyon.say_and_wait([
                  "흐흥, 실험 한 번 실패했다고 내가 무너지기라도 할 줄 아나? ",
                  callname,
                ]);
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 걱정스러운 얼굴로 ",
                  tachyon.get_colored_name(),
                  "의 두 다리를 살폈다",
                ]);
                await era.printAndWait("이 와중에도 실험이 신경 쓰이는 건가");
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 어이가 없으면서도 짜증이 났다",
                ]);
                era.println();
                await tachyon.say_and_wait([
                  "게다가…… 나는 ",
                  callname,
                  "을(를) 믿고 있다네. 자네가 나를 위험하게 둘 리 없지 않나?",
                ]);
                era.println();
                await you.say_and_wait('…………');
                await era.printAndWait([
                  "생각해 보면 ",
                  tachyon.sex,
                  "이(가) 이토록 순수하게 꿈을 좇는 ",
                  tachyon.uma_sex_title,
                  "이(가) 아니었다면",
                ]);
                await era.printAndWait([
                  "나도 ",
                  tachyon.sex,
                  "의 무모한 행동에 어울려 주지는 않았을 것이다",
                ]);
                await era.printAndWait([
                  "꿈밖에 보지 못하는 몽상가가 폭주할 때 ",
                  tachyon.sex,
                  "의 발밑에 패인 곳을 살피는 것",
                ]);
                await era.printAndWait(
                  "그것이 모르모트로서 내가 해야 할 일이다",
                );
                era.println();
                await tachyon.say_and_wait(
                  "그러니…… 돌아가서 반성하고 내일 다시 실험일세!",
                );
                await you.say_and_wait("아니, 적어도 사흘 뒤야");
                era.println();
                await era.printAndWait(
                  "꿈도 먼 미래도 잠시 미뤄 두자. 적어도 이틀은 더 상태를 지켜봐야 한다",
                );
              },
            );
          } else if (era.get('relation:32:0') > 225) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([callname, "……아파……"]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  "은(는) 눈물을 글썽이며 잔디에 앉아 ",
                  you.get_colored_name(),
                  "에게 위로를 구했다",
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 황급히 ",
                  tachyon.sex,
                  "의 부상을 확인하고 큰 문제가 없다는 걸 안 뒤에야 한숨을 내쉬었다",
                ]);
              },
              async () => {
                await tachyon.say_and_wait(
                  "……괜찮네. 일시적인 실패일 뿐이야…… 실험은 처음부터……",
                );
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  "은(는) 중얼거렸다",
                ]);
                await era.printAndWait("……이 와중에도 실험인가");
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 어이없어하면서도 ",
                  tachyon.sex,
                  "의 두 다리에 이상이 없는지 살폈다",
                ]);
              },
              async () => {
                await tachyon.say_and_wait([
                  "큭……",
                  callname,
                  "……괘, 괜찮네",
                ]);
                await era.printAndWait("조금 쉬면…… 하아");
                era.println();
                await you.say_and_wait("안 돼");
                await tachyon.say_and_wait('！？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 가장 옮기기 편한 자세로 ",
                  tachyon.get_colored_name(),
                  "의 목과 무릎 아래를 받쳐 안아 올렸다",
                ]);
                await era.printAndWait([
                  "지금은 ",
                  tachyon.sex,
                  "의 고집을 들어 줄 때가 아니다. 당장 보건실에 데려가 진찰을 받아야 한다",
                ]);
                era.println();
                await tachyon.say_and_wait([
                  "잠깐! ",
                  callname,
                  "! 알겠네! 갈 테니 내려 주게!",
                ]);
                await you.say_and_wait("하지만 이렇게 하는 게 더 효율적이잖아?");
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) ",
                  tachyon.get_colored_name(),
                  "의 만류를 무시하고 모두가 지켜보는 가운데 ",
                  tachyon.get_colored_name(),
                  "을(를) 보건실로 옮겼다",
                ]);
              },
            );
          } else {
            buffer.push(
              async () => {
                await tachyon.say_and_wait("큭…… 역시 무리였나");
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  "은(는) 말대로 멈춰 섰고 ",
                  you.get_colored_name(),
                  "은(는) 황급히 ",
                  tachyon.sex,
                  "의 다리를 살폈다",
                ]);
                await era.printAndWait("……오늘 트레이닝은 여기까지야");
              },
              async () => {
                await tachyon.say_and_wait("다리가…… 움직이지 않는군");
                await tachyon.say_and_wait("실험 실패로군……");
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  "은(는) 비틀거리며 몇 걸음 걷다가 멈춰 섰다",
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 황급히 ",
                  tachyon.get_colored_name(),
                  "의 상태를 살폈다",
                ]);
                await era.printAndWait(
                  "다행히…… 살짝 삔 정도라 큰일은 없을 것 같다",
                );
                await era.printAndWait("그래도 우선 보건실에서 쉬게 해야 한다……");
              },
              async () => {
                await tachyon.say_and_wait("내 한계는…… 고작 이 정도인가");
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  "은(는) 달려가 ",
                  tachyon.get_colored_name(),
                  "이(가) 휘청이는 순간 ",
                  tachyon.sex,
                  "을(를) 부축했다",
                ]);
                await era.printAndWait([
                  "충동적으로 나선 탓에 오히려 ",
                  tachyon.get_colored_name(),
                  "에게 핀잔을 들을지도 모른다. 그래도 ",
                  you.get_colored_name(),
                  "은(는) 망설이지 않고 앞으로 나섰다",
                ]);
                await era.printAndWait([
                  "그 덕분에 ",
                  you.get_colored_name(),
                  "은(는) ",
                  tachyon.get_colored_name(),
                  "의 중얼거림을 들었다",
                ]);
                era.println();
                await you.say_and_wait(
                  "더 강해질 수 있어…… 타키온의 한계는 절대 그 정도가 아니야",
                );
                await tachyon.say_and_wait('…………');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  "은(는) 입을 다문 채였다. ",
                  you.get_colored_name(),
                  "의 말을 들었는지조차 알 수 없었다",
                ]);
                await era.printAndWait([
                  "하지만 ",
                  tachyon.sex,
                  "은(는) 천천히 걷기 시작했고 ",
                  you.get_colored_name(),
                  "은(는) 곁에서 부축하며 보건실로 향했다",
                ]);
              },
            );
          }
          await get_random_entry(buffer)();
        }
      } else if (fail_again) {
        if (plan_b && era.get('cflag:32:育成回合计时') > 95) {
          era.drawLine();
          await tachyon.say_and_wait("아아…… 넘어지겠군", true);
          era.println();
          await tachyon.say_and_wait("역시 포기하는 편이 좋으려나", true);
          await tachyon.say_and_wait(
            ["어차피 ", call_25, "도 이미 성장했으니까"],
            true,
          );
          await tachyon.say_and_wait("아쉽지만……", true);
          era.println();
          await you.say_and_wait("타키온! 괜찮아!");
          era.println();
          await tachyon.print_and_wait("……왜 그렇게 다급해하는 건가");
          await tachyon.print_and_wait(
            "정말로 내 꿈을 믿는 사람이 없었다면, 그래도 상관없었을 것이다",
          );
          await tachyon.print_and_wait([
            "하지만……",
            you.sex,
            "만은, ",
            you.sex,
            "의 기대만은……",
          ]);
          await tachyon.print_and_wait(
            "좋아, 조금만 더 힘내 볼까…… 이 몸이 어디까지 버텨 주는지",
          );
          // 47+20＝シニア級5月4週＝日本ダービー
        } else if (era.get('cflag:32:育成回合计时') > 47 + 20) {
          era.drawLine();
          await tachyon.say_and_wait("아아…… 넘어지겠군", true);
          era.println();
          await tachyon.say_and_wait("역시 이렇게 된 이상 포기해야겠어", true);
          await tachyon.say_and_wait(
            "괜찮네. 예비 계획이 있으니까……",
            true,
          );
          await tachyon.say_and_wait("분하지만……", true);
          era.println();
          await you.say_and_wait("타키온! 괜찮아!");
          era.println();
          await tachyon.print_and_wait("……안 되겠어");
          await tachyon.print_and_wait("이제 되돌아갈 수 없어");
          await tachyon.print_and_wait([
            you.sex,
            "의 응원 덕분에 여기까지 왔으니",
          ]);
          await tachyon.print_and_wait(
            "이제 와서 물러나면 웃음거리도 못 될 일이지",
          );
          await tachyon.print_and_wait(
            "나를 믿어 준 사람을 위해…… 조금만 더 버텨 보겠네",
          );
        } else if (reg_toky_yus) {
          era.drawLine();
          await tachyon.say_and_wait("아아…… 넘어지겠군", true);
          era.println();
          await tachyon.say_and_wait("역시 이렇게 된 이상 포기해야겠어", true);
          await tachyon.say_and_wait(
            "괜찮네. 예비 계획이 있으니까……",
            true,
          );
          await tachyon.say_and_wait("분하지만……", true);
          era.println();
          await you.say_and_wait("타키온! 괜찮아!");
          era.println();
          await tachyon.print_and_wait("……왜 그렇게 다급해하는 건가");
          await tachyon.print_and_wait(
            "정말로 내 꿈을 믿는 사람이 없었다면, 그래도 상관없었을 것이다",
          );
          await tachyon.print_and_wait([
            "하지만……",
            you.sex,
            "만은, ",
            you.sex,
            "의 기대만은……",
          ]);
          await tachyon.print_and_wait(
            "좋아, 조금만 더 힘내 볼까…… 이 몸이 어디까지 버텨 주는지",
          );
        } else {
          await tachyon.say_and_wait("아파");
          await tachyon.say_and_wait("무서워");
          await tachyon.say_and_wait("역시…… 내 한계는……");
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 그제야 정신을 차리고 ",
            tachyon.get_colored_name(),
            "에게 달려갔다",
          ]);
          await era.printAndWait([
            "하지만 ",
            tachyon.sex,
            "은(는) 혼잣말만 되풀이할 뿐, 나를 보고 있지 않은 것 같았다",
          ]);
          await era.printAndWait([
            "잠시 뒤에야 제정신으로 돌아와 ",
            you.get_colored_name(),
            "의 부축을 받으며 보건실에서 치료를 받았다",
          ]);
          await era.printAndWait("…………정말 괜찮은 걸까. 몸도, 마음도");
          await era.printAndWait([you.get_colored_name(), "은(는) 묻고 싶었다"]);
          await era.printAndWait([
            "하지만…… 그때 막아 주지도 못한 내가 이제 와서 참견할 자격이 있을까",
          ]);
        }
      } else {
        await era.printAndWait("늦었다");
        await era.printAndWait("소리칠 틈도 없다");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 이미 다시 발을 단단히 디디고 있었다",
        ]);
        await era.printAndWait("줄곧 가슴 한편에 남아 있던 불안을 떨쳐 버리듯");
        await era.printAndWait("앞으로 다음 한 걸음을 내디뎠다");
        await era.printAndWait("그렇게 트레이닝이 끝날 때까지");
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = "레이스 승리";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {boolean} do_sex 興奮したままの行為か（男/フタナリトレーナー×女/フタナリタキオンのみ）
     */
    const f = async (tachyon, you, callname, do_sex) => {
      era.printButton("「최고의 달리기였어!」", 1);
      era.printButton("「아직 개선할 여지가 있어」", 2);
      const ret = await era.input();
      if (do_sex) {
        await era.printAndWait("쿵");
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 칭찬이나 격려를 끝내기도 전에 ",
          tachyon.get_colored_name(),
          "은(는) 바짝 다가와 ",
          you.get_colored_name(),
          "을(를) 벽에 밀어붙였다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "하아……하아……미안하네, ",
          callname,
          "……너무 달렸는지 흥분이 가라앉지 않아…… 몸 좀 빌려주게",
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "은(는) 오른손으로 벽을 짚어 ",
          you.get_colored_name(),
          "의 도망갈 길을 막고, 왼쪽 무릎을 들어 ",
          you.get_colored_name(),
          "의 사타구니에 밀어붙였다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "괜찮아…… 괜찮아…… 한 번만…… 조금이면 돼……",
        );
        era.println();
        await era.printAndWait([
          "누구를 설득하는 것인지 알 수 없는 말이 이어졌다. ",
          you.get_colored_name(),
          "에게 도망갈 생각이 없음을 확인하자 ",
          tachyon.sex,
          "은(는) 천천히 주저앉아 떨리는 두 손으로 ",
          you.get_colored_name(),
          "의 바지를 내렸다",
        ]);
        era.println();
        await era.printAndWait("툭");
        await era.printAndWait([
          "하루 종일 갇혀 있던 열기와 함께 육봉이 ",
          tachyon.get_colored_name(),
          "의 얼굴로 튀어 올랐다",
        ]);
        await era.printAndWait(
          "광기 어리던 두 눈이 갑자기 초점을 잃고 가늘게 떨리는 생식기만 비추었다",
        );
        await era.printAndWait(
          "고양이 장난감을 본 새끼 고양이처럼 흔들리는 그것을 따라가기 시작했다",
        );
        await era.printAndWait(
          "하지만 레이스의 자극에 발정한 몸은 그 짙은 냄새를 맡자마자 힘이 풀렸고, 비릿한 냄새를 계속 맡는 코만이 그것을 쫓을 수 있었다",
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            "몸에 힘이 들어가지 않는 ",
            tachyon.get_colored_name(),
            "은(는) 간신히 애원하는 목소리만 낼 수 있었다",
          ]);
          await era.printAndWait("감정적으로는 무관심하고, 오히려 혐오하는 이 사람");
          await era.printAndWait("육체적으로는 갈망하고, 채워 주길 바라는 이 사람");
          await era.printAndWait("마침내 몸의 갈망이 감정의 냉담함을 넘어섰다");
          era.println();
          await era.printAndWait("다행히 상대는 나쁜 의미로 기대를 저버리지 않았다");
          await era.printAndWait([
            "역시 담당 ",
            tachyon.uma_sex_title,
            "에게 손대기를 주저하지 않는 쓰레기다",
          ]);
          era.println();
          await era.printAndWait([
            "한 걸음 다가온 트레이너의 육봉에 침이 고일 만큼 굶주린 입이 채워지는 동안 ",
            tachyon.get_colored_name(),
            "은(는) 행복하게 그렇게 생각했다",
          ]);
        }
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "의 행복한 얼굴을 보고 ",
          you.get_colored_name(),
          "도 계속하고 싶은 마음은 있었지만……",
        ]);
        era.println();
        era.printButton("「……이 뒤에 위닝 라이브야」", 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          "은(는) 노려보았지만 ",
          you.get_colored_name(),
          "은(는) 무정하게 육봉을 ",
          tachyon.sex,
          "의 입에서 빼냈다",
        ]);
        await era.printAndWait([
          "앞으로의 ",
          tachyon.sex,
          "의 계획을 위해서라도 적어도 경기장에 있는 동안에는 ",
          tachyon.get_colored_name(),
          "의 명성을 해칠 수 없었다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "은(는) 이성과 감성 사이에서 흔들리다가 마침내 정욕을 억누르고 뒤돌아보지 않은 채 대기실로 향했다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 그제야 숨을 내쉬었다. 레이스의 자극이 건전한 정신적 흥분뿐만 아니라 그쪽으로까지 이어질 줄이야……",
        ]);
        await era.printAndWait([
          "앞으로의 레이스에서도 오늘 같은 일이 벌어질까? ",
          you.get_colored_name(),
          "은(는) 저도 모르게 몸을 떨었다",
        ]);
      } else if (ret === 1) {
        if (era.get('relation:32:0') > 225) {
          await tachyon.say_and_wait(
            "그렇지, 그렇지? 후후, 이것이 광속을 넘는 달리기라네",
          );
        } else {
          await tachyon.say_and_wait([
            "실험 결과를 검산한 것뿐인데 그렇게 기뻐하다니.",
            callname,
            ", 낙천적이군",
          ]);
        }
      } else if (era.get('relation:32:0') > 225) {
        if (Math.random() < 0.5) {
          await tachyon.say_and_wait(
            "쳇…… 반박할 수는 없군. 그래도 조금 더 칭찬해 줘도 되잖나? 그만큼 열심히 해서 이겼으니",
          );
        } else {
          await tachyon.say_and_wait([
            "너무하군, ",
            callname,
            ". 담당이 이겼는데 그런 표정은 누구 보라고 짓는 건가? 어서, 어서, 더 칭찬해 주게, 어～～서～～!",
          ]);
        }
      } else if (Math.random() < 0.5) {
        await tachyon.say_and_wait(
          "흥…… 알고 있어. 쓸데없는 말은 필요 없네",
        );
      } else {
        await tachyon.say_and_wait(
          "좋아. 새로운 발견이 있었다면 이번 실험도 헛되지는 않았군",
        );
      }
      return [];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = "실험의 시작";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        "이곳은 후추의 트레센 학원. 오늘도 ",
        you.get_colored_name(),
        "의 꿈은 이곳에서 계속 자라나고 있다",
      ]);
      await tachyon.say_and_wait("트레이너 군, 입을 열게");
      era.println();
      await era.printAndWait("계속 자라나고 있다");
      era.println();
      await tachyon.say_and_wait("트레이너 군, 한 바퀴 달려서 속도를 측정하게");
      era.println();
      await era.printAndWait("계속 자라나고");
      era.println();
      await tachyon.say_and_wait(
        "트레이너 군, 알약은 입에 물고 있게. 삼키라고 하면 삼켜",
      );
      era.println();
      await era.printAndWait("자라……나고?");
      era.println();
      await era.printAndWait([
        "아침부터 실험실로 불려 와 오전 내내 실험에 동원된 ",
        you.get_colored_name(),
        "의 의문은 이미 정점에 달해 있었다",
      ]);
      era.println();
      await you.say_and_wait(
        ["지금은 수업 시간일 텐데. ", tachyon.sex, "은(는) 등교하지 않아도 되나?"],
        true,
      );
      await you.say_and_wait("나는 지금쯤 사무 업무를 하고 있어야 하지 않나?", true);
      await you.say_and_wait(
        "왜 여기서 수상한 약을 잔뜩 먹으며 실험당하고 있는 거지?",
        true,
      );
      era.println();
      await tachyon.say_and_wait("트레이너 군? 뭘 그리 멍하니 있나?");
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "은(는) 의아하게 ",
        you.get_colored_name(),
        "을(를) 바라보았다. 얼굴에는 짜증이 떠올라 있었다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "은(는) 며칠 전 ",
        you.get_colored_name(),
        "이(가) 트레이닝장에서 보았던 ",
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        "당시 ",
        you.get_colored_name(),
        "은(는) ",
        tachyon.sex,
        "의 빛 같은 속도와 달리기에 이끌려 충동적으로 계약을 맺었다",
      ]);
      await era.printAndWait("그리고 충동적으로 이상한 계약서를 여러 장 썼다");
      await era.printAndWait("아무래도 그중에는 약물 시험도 포함되어 있었던 것 같다");
      await era.printAndWait("그때 나는 의심도 없이 서명한 건가?");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 당시의 판단력을 의심하지 않을 수 없었다",
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([you.get_colored_name(), "은(는) 문득 정신을 차렸다"]);
      await era.printAndWait([
        "회상에 너무 오래 빠져 있었다. ",
        tachyon.get_colored_name(),
        "이(가) 불렀는데 대답하지 못했다",
      ]);
      await era.printAndWait("큰일이다, 혼나지 않을까");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 어른답지 못하게 두려워하며 담당 ",
        tachyon.uma_sex_title,
        "을(를) 올려다보다가 마침 ",
        tachyon.sex,
        "이(가) ",
        you.get_colored_name(),
        "을(를) 바라보는 눈과 마주쳤다",
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        "그 짙은 붉은색 두 눈은 블라인드처럼 ",
        you.get_colored_name(),
        "의 시선을 빨아들였다",
      ]);
      await era.printAndWait("─────아니, 정확히는 빨아들이는 것이 아니었다");
      await era.printAndWait(
        "그 시선은 그저 조용히 거기에 있었다. 하지만 그 자체가 하나의 창문 같았다",
      );
      await era.printAndWait("창문 너머를 들여다보고 싶어 견딜 수 없게 만들었다");
      await era.printAndWait([
        "사람을 끌어들이는 것은 ",
        tachyon.sex,
        "의 시선이 아니라 자신의 호기심이었다",
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, "의 한계는 어디에 있을까?"]);
      await era.printAndWait([tachyon.sex, "의 머릿속에서는 무슨 생각이 돌고 있을까?"]);
      await era.printAndWait([tachyon.sex, "의 미래는 얼마나 빛날 수 있을까?"]);
      await era.printAndWait([tachyon.sex, "의 이상형은?"]);
      await era.printAndWait([tachyon.sex, "의 속옷 색깔은?"]);
      await era.printAndWait("피임은 착용하는 쪽일까, 약을 먹는 쪽일까?");
      await era.printAndWait("성감대는 귀일까, 가슴일까?");
      await era.printAndWait("침대에서는 어떤 체위를 좋아할까?");
      era.println();
      await era.printAndWait("전부, 전부");
      await era.printAndWait([
        tachyon.sex,
        "의 모든 것을 ",
        you.get_colored_name(),
        "은(는) 알고 싶었다",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) ",
        you.get_colored_name(),
        "의 눈을 보고 문득 웃었다",
      ]);
      era.println();
      await tachyon.say_and_wait("그 갈망하는 눈…… 작은 동물 같군");
      era.println();
      await era.printAndWait("작은 동물? 내가?");
      await era.printAndWait([you.get_colored_name(), "은(는) 얼굴을 조금 붉혔다"]);
      await era.printAndWait("어른인 자신이 작은 동물 취급을 받다니");
      era.println();
      await tachyon.say_and_wait("그래…… 작은 동물. 예를 들면…… 실험동물 같은");
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 문득 생각에 잠겼다. 무슨 생각을 하는지는 알 수 없었다",
      ]);
      await era.printAndWait("그러더니 문득 고개를 끄덕였다");
      era.println();
      await tachyon.say_and_wait("……그래, 정했네");
      era.println();
      await era.printAndWait([tachyon.sex, "은(는) 자신만만하게 말했다"]);
      era.println();
      await tachyon.say_and_wait(["이제부터 모르모트 군이라고 부르겠네!"]);
      era.printButton("「모, 모르모트?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "후후, 잘 어울리지 않나? 모르모트 군…… 모르모트 군……",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 무언가 말하려다 다시 입을 다물었다. 호칭쯤이야 마음대로 부르게 두자",
      ]);
      await era.printAndWait("저 사람을 미치게 하는 두 눈을 위해서라면");
    };
    f.title = title;
    return f;
  })(),
  ws_15: (() => {
    const title = "실험 과제 수립";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await tachyon.say_and_wait("달리고 싶은 레이스 말인가?");
      era.println();
      await era.printAndWait([
        "예전 과학 준비실, 지금은 ",
        tachyon.get_colored_name(),
        "의 실험실이 된 곳에서 ",
        you.get_colored_name(),
        "은(는) 작은 소파에 앉아 실험대 앞의 ",
        tachyon.get_colored_name(),
        "에게 고개를 끄덕였다",
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        "과(와) 계약한 첫날 물었어야 할 질문이다. 하지만 당시 ",
        you.get_colored_name(),
        "은(는) ",
        tachyon.get_colored_name(),
        "에게 너무나 매료된 나머지 거의 완전히 잊고 있었다",
      ]);
      await era.printAndWait([
        "어쨌든 트윙클 시리즈에 출전하려면 일정 계획은 필수다. ",
        tachyon.sex,
        "의 선택을 들어야 ",
        tachyon.sex,
        "에게 맞는 트레이닝 방침을 세울 수 있다",
      ]);
      await era.printAndWait("3관 노선일까, 티아라 3관일까, 아니면 마일일까");
      await era.printAndWait([
        "단거리…… 아마 무리겠지. 미안하지만 ",
        tachyon.get_colored_name(),
        "에게 그런 적성은 없을 것이다",
      ]);
      era.println();
      await tachyon.say_and_wait("……레이스? 관심 없네");
      await tachyon.say_and_wait(
        "애초에 내 연구는 나 자신의 가능성을 위한 것일세. 남들이 어떻든 상관없지. 누가 더 강한지 겨루는 건 애들 장난에 불과해",
      );
      await era.printAndWait([
        "참으로 ",
        tachyon.get_colored_name(),
        "다운 대답이다",
      ]);
      await era.printAndWait([
        "솔직히 ",
        tachyon.sex,
        "이(가) 그렇게 대답한 게 놀랍지는 않다",
      ]);
      await era.printAndWait("하지만 트레이너로서 다해야 할 책임이 있다");
      await era.printAndWait([
        "게다가……",
        tachyon.sex,
        "에게 시선을 빼앗긴 팬으로서, 응원하는 선수가 더 큰 무대에서 빛나는 모습을 보고 싶은 것도 당연하지 않은가?",
      ]);
      era.println();
      await era.printAndWait([
        "그래서 ",
        you.get_colored_name(),
        "은(는) 말을 정리한 뒤 입을 열었다",
      ]);
      era.println();
      if (love >= 50 && relation <= 225 && tachyon.sex_code !== 1) {
        era.printButton(
          `「왜냐하면 너에겐 레이스가 필요하니까. ${tachyon.uma_sex_title}에게는 레이스가 필요해」`,
          1,
        );
        await era.input();
        await era.printAndWait("추측도 허세도 아니다. 사실을 말했을 뿐이다");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "에게는 레이스가 필요하다. ",
          tachyon.sex,
          "의 실험을 검증하기 위해서",
        ]);
        await era.printAndWait([
          tachyon.uma_sex_title,
          "에게는 레이스가 필요하다. 투지를 발산하기 위해서",
        ]);
        await era.printAndWait([
          "두 가지 필요를 한 번에 충족할 수 있다면 ",
          tachyon.sex,
          "에게 거절할 이유는 없다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "……무슨 말인지는 알겠네. 하지만 그 말투, 참으로 붙임성이 없군",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 차갑게 ",
          you.get_colored_name(),
          "을(를) 바라보았다",
        ]);
        era.println();
        await era.printAndWait("역시 극약 처방이 필요한가. 그렇다면……");
        era.println();
        await you.say_and_wait(
          "아아, 타키온이 패배가 두려워 출전을 거부한다면 이해해. ",
        );
        await you.say_and_wait(
          "타키온의 자존심이 걸린 일이기도 하고, 이번 기수에는 강자도 많으니까. ",
        );
        await you.say_and_wait([
          "만약 실력으로 타키온을 능가하는 ",
          tachyon.uma_sex_title,
          "이(가) 나타난다면, 한계를 넘겠다고 하던 타키온은……",
        ]);
        era.println();
        await era.printAndWait("웃음거리가 되겠지");
        await era.printAndWait([
          "양손을 휘둘러 시험관 열 개를 꺼내 들고 관자놀이에 핏줄을 세운 ",
          tachyon.get_colored_name(),
          "을(를) 보고 ",
          you.get_colored_name(),
          "은(는) 뒷말을 꿀꺽 삼켰다",
        ]);
        await tachyon.say_and_wait([
          callname,
          ", 자네란 사람은…… 붙임성이 없는 정도면 몰라도, 스스로 매를 버는 말을 하다니. 죽는 게 두렵지도 않나?",
        ]);
        await you.say_and_wait("읍읍읍읍……");
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 변명하려 했지만 ",
          tachyon.get_colored_name(),
          "에게 입을 막혀 소리를 낼 수 없었다",
        ]);
        era.println();
        await tachyon.say_and_wait("어디 보자…… 그래, 이거로군");
        era.println();
        await era.printAndWait([
          "계속 막고 있기도 귀찮다고 생각했는지 ",
          tachyon.get_colored_name(),
          "에게 묘안이 떠오른 모양이었다",
        ]);
        await era.printAndWait([
          "동시에 ",
          you.get_colored_name(),
          "의 머릿속에도 전류가 흘렀다. 뭔가 좋지 않은 일이 벌어질 거라는 예고 같았다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "은(는) 천천히 가운 자락을 들어 올렸다. 이 시점에서 ",
          you.get_colored_name(),
          "의 위기감은 정점에 달했다. 하지만 달아나고 싶어도 어디로?",
        ]);
        await era.printAndWait([
          "하물며 ",
          tachyon.uma_sex_title,
          "의 손아귀에서 도망친다고? ",
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "에게 미쳤다는 소리를 들을지언정 바보는 아니다. 불가능한 망상은 하지 않는다",
        ]);
        era.println();
        await era.printAndWait("가운 아래에는 촉촉한 광택을 띤 검은 팬티스타킹이 있었다");
        await era.printAndWait(
          "아침부터 풍만한 엉덩이와 가느다란 다리를 감싸 온 후끈한 팬티스타킹은 하루 동안 숙성된 끝에 안팎으로 완전히 냄새가 배어 있었다",
        );
        await era.printAndWait([
          "게다가 그걸 신은 사람은 평소 생활이 칠칠치 못한 ",
          tachyon.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 두려움에 고개를 저었다. 하지만 이미 늦었다",
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "은(는) 천천히 팬티스타킹을 내렸다. 엉덩이에서 벗겨지는 순간 ",
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "의 몸이 탄력 있는 엉덩이의 반동으로 살짝 흔들리는 것처럼 보였다",
        ]);
        await era.printAndWait([
          "팬티스타킹이 사타구니까지 내려왔다. 그동안 품고 있던 냄새를 놓치기 싫다는 듯, 검은 천은 아직도 ",
          tachyon.child_sex_title,
          "의 두 다리 사이 은밀한 부위와 실처럼 이어져 있었다————",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "은(는) 오늘 속옷을 입지 않은 건가? ",
          you.get_colored_name(),
          "은(는) 문득 생각했다. 저렇게 늘어진 실을 보면 답은 뻔했다",
        ]);
        await era.printAndWait(
          "무대의 막이 오르듯 그 아래의 하얀 허벅지가 드러났다——그것은 참혹한 비극의 개막이기도 했다",
        );
        era.println();
        await tachyon.say_and_wait(["자, ", callname, ", 입을 벌리게～～"]);
        era.printButton("「읍읍읍읍!!」", 1);
        await era.input();
        await era.printAndWait([
          "이대로는 안 된다. 절박한 마음에 ",
          you.get_colored_name(),
          "은(는) 헛된 저항이라도 시도했다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 황급히 네 발로 기어 실험실을 빠져나가려 했지만, 예상대로 첫걸음부터 ",
          tachyon.get_colored_name(),
          "에게 인간으로서는 반응할 수 없는 속도로 등을 점령당했다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "은(는) ",
          you.get_colored_name(),
          "의 등에 올라타 팬티스타킹으로 ",
          you.get_colored_name(),
          "의 입을 조였다. 재갈처럼 ",
          you.get_colored_name(),
          "을(를) 고정한 채 조이자, 견디지 못한 ",
          you.get_colored_name(),
          "이(가) 입을 벌렸고 팬티스타킹은 그대로 뺨과 입가에 파고들었다",
        ]);
        await era.printAndWait([
          "순간 시큼하고 짙은 냄새가 ",
          you.get_colored_name(),
          "의 입안에 퍼졌다. 축축한 감촉과 사타구니에서 풍기는 옅은 냄새가 콧속을 파고들었다. 강렬한 냄새의 습격에 ",
          you.get_colored_name(),
          "은(는) 팔다리의 힘이 풀려 무릎을 꿇었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "흥…… 조금은 기분이 풀렸군. 본론으로 돌아가지. ",
        );
        await tachyon.say_and_wait(
          "레이스 출전은 물론 필수일세. 어떤 경주를 선택할지는……",
        );
        await tachyon.say_and_wait(
          "후후, 그럼 3관을 목표로 해 볼까. 그렇게 떠들어 놓고 발목을 잡으면 가죽을 벗겨 주겠네. 이의는 없겠지?",
        );
        era.println();
        await era.printAndWait([
          "냄새에 어지러워 의식을 잃기 직전 ",
          you.get_colored_name(),
          "이(가) 마지막으로 한 생각은——의견이 있어도 말을 할 수 있게 해 달라는 것이었다……",
        ]);
      } else {
        if (
          love >= 50 &&
          relation > 225 &&
          tachyon.sex_code - 1 &&
          you.sex_code > 0
        ) {
          era.printButton("왜냐하면……", 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            "이(가) 막 입을 열려는 순간, 돌아선 ",
            tachyon.get_colored_name(),
            "에게 입술을 막혀 아무 말도 할 수 없었다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "은(는) 일어나 소파에 앉은 ",
            you.get_colored_name(),
            "을(를) 누르며 ",
            you.get_colored_name(),
            "과(와) 눈을 맞췄다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "무슨 말을 하려는지는 알고 있네. 공적으로도 사적으로도 레이스에 나갈 이유와 필요가 있다는 것까지. 하지만……",
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 몸을 돌려 털썩 ",
            you.get_colored_name(),
            "의 허벅지에 앉더니 ",
            you.get_colored_name(),
            "의 허벅지 바깥쪽을 두드렸다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "지금은 레이스에 나갈 기분이 아니란 말이지. 그러니 잘 생각해서 내 기분을 풀어 줄 말을 찾아보게. 기분이 좋아지면…… 나가 줄지도 모르지 않나?",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 쓴웃음을 지으며 ",
            tachyon.get_colored_name(),
            "의 허리를 감쌌다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "은(는) 아주 자연스럽게 몸을 기대며 가장 편한 자세를 잡았다",
          ]);
          era.println();
          await you.say_and_wait("타키온이 제일 멋있어");
          await you.say_and_wait("타키온은 귀여워");
          await you.say_and_wait("타키온은 아름다워");
          await you.say_and_wait([
            "누구보다 강하고 대단해",
            tachyon.uma_sex_title,
          ]);
          await you.say_and_wait([
            "초광속의 ",
            tachyon.sex_code === 1 ? "왕자님" : "공주님",
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            tachyon.get_colored_name(),
            "의 귓가에서 ",
            tachyon.sex,
            "을(를) 칭찬하는 말을 쉴 새 없이 늘어놓았다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "의 귀도 계속 움직이는 걸 보니 효과가 있는 모양이었다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "은(는) 의기양양한 얼굴로 ",
            you.get_colored_name(),
            "의 허벅지를 세게 두드리며 계속하라고 재촉했다",
          ]);
          era.println();
          await tachyon.say_and_wait("흐흥…… 더, 더 말해 보게!");
          era.println();
          await era.printAndWait([
            "맞아서 조금 아팠던 ",
            you.get_colored_name(),
            "은(는) 마음을 바꿔 장난을 떠올렸다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 안고 있던 손을 풀어 ",
            tachyon.sex,
            "의 허벅지 바깥쪽으로 옮겼다",
          ]);
          era.println();
          await tachyon.say_and_wait(['……？ ', callname, '？']);
          era.printButton(
            "「타키온이 달릴 때 그 커다란 엉덩이가 흔들리는 걸 보고 싶어」",
            1,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            tachyon.sex,
            "의 풍만한 엉덩이를 세게 때렸다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "의 온몸이 떨리며 몸에 꼭 달라붙은 팬티스타킹에 검은 물결이 겹겹이 일었다",
          ]);
          await you.say_and_wait(
            "레이스가 끝나면 대기실에서 타키온의 안을 하얗게 채워 주고 싶어",
          );
          await era.printAndWait([
            you.get_colored_name(),
            "의 말투는 조금 전 칭찬할 때처럼 부드러웠다. 내용만 몹시 상스러워졌을 뿐이다",
          ]);
          await era.printAndWait([
            "착각일지도 모르지만 ",
            tachyon.get_colored_name(),
            "의 귀는 오히려 쫑긋 선 것 같았다",
          ]);
          era.println();
          await you.say_and_wait(
            "그런 다음 바이브로 막고 그대로 위닝 라이브 무대에 세우는 거야",
          );
          await you.say_and_wait(
            "의상을 입은 타키온이 불룩한 배를 안고 무대 한가운데에……",
          );
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 천천히 ",
            tachyon.sex,
            "의 배를 쓰다듬으며 말을 마치려 했다……",
          ]);
          await era.printAndWait([
            "하지만 ",
            you.get_colored_name(),
            "의 손이 붙잡혔다",
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            "이(가) 돌아보았다. 어느새 짙은 붉은 눈동자는 정욕에 젖은 연분홍빛으로 물들어 있었다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            "……그런 말로 나를 도발하다니…… 어떤 결말을 맞게 될지는 알고 있겠지……❤",
          ]);
          era.println();
          await era.printAndWait("아아, 너무 나갔다");
          await era.printAndWait([
            "어느새 ",
            tachyon.get_colored_name(),
            "의 엉덩이가 ",
            you.get_colored_name(),
            "의 아랫배 위에 올라와 있었다",
          ]);
          await era.printAndWait(
            "계속 비비고 있었다. 주인의 조교를 기다리는 강아지처럼",
          );
          era.println();
          await era.printAndWait([
            "이대로 시작해도 좋다…… 하지만 처음 ",
            you.get_colored_name(),
            "의 목적은 뭐였더라……?",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "레이스는 나가겠네❤️3관❤️목표는 3관이면 돼❤️자……",
            callname,
            "❤️어서❤️와 주게❤️",
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 미소를 지으며 몸을 뒤집어 ",
            tachyon.get_colored_name(),
            "을(를) 아래에 눕혔다",
          ]);
        } else if (relation <= 225) {
          era.printButton("이득으로 설득한다", 1);
          await era.input();
          await you.say_and_wait(
            "레이스에 나가면 상금을 실험에 쓸 수 있어. 그러면 연구비 문제는 해결되겠지",
          );
          era.println();
          await era.printAndWait([
            "우선 이득으로 설득한다. ",
            tachyon.get_colored_name(),
            "같은 연구자에게 감정론을 내세워 봐야 웃음만 살 뿐이다. 이치로 설득하는 게 최선이다",
          ]);
          await tachyon.say_and_wait([
            "기각일세, ",
            callname,
            ". 내 연구의 부산물은 그 자체로 상품이 되네. 레이스 준비에 드는 시간의 기회비용은 이미 상금으로 얻을 이익을 훨씬 넘어서지",
          ]);
          era.println();
          await you.say_and_wait(
            "하지만 레이스로 얻는 팬은? 팬들의 소비력도 상당한 자금이 되지 않을까?",
          );
          era.println();
          await tachyon.say_and_wait(
            "맞는 말일세. 정말 인기를 얻는다면 연구만 하는 것보다 이익이 클지도 모르지……",
          );
          await tachyon.say_and_wait(
            "하지만 그러면 이른바 팬 서비스——위닝 라이브나 대외적인 이미지 관리——에 들이는 시간도 늘어나니, 시간 비용은 더욱 커지네",
          );
          await tachyon.say_and_wait(
            "게다가 자네는 한 가지를 잊고 있어. 내가 돈이 필요한 건 실험 비용 때문일세. 근본적인 목적은 실험이지 돈벌이가 아니란 말이지",
          );
          era.println();
          await you.say_and_wait(
            "……레이스를 포기하면 트레센 학원의 설립 취지에 어긋나는 행동이 될 텐데…",
          );
          await you.say_and_wait(
            "보통은 그렇게 심각한 일이 아니겠지만, 전적이 있는 타키온이라면…… 최악의 경우 퇴학도 가능해",
          );
          era.println();
          await era.printAndWait("이득이 통하지 않는다면 위협으로 압박한다");
          await era.printAndWait(
            "협박은 유쾌한 수단이 아니다. 하지만 불가능한 이야기도 아니다……",
          );
          await era.printAndWait([
            "그 이사장이 허락할 것 같지는 않지만, 지금은 ",
            tachyon.get_colored_name(),
            "을(를) 겁줄 재료가 된다",
          ]);
          era.println();
          await era.printAndWait([
            "하지만 ",
            tachyon.get_colored_name(),
            "의 반응은 재미있는 농담이라도 들은 듯했다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            ", 처음 만났을 때를 기억하나? 그때 이미 퇴학으로 협박을 받았었지. 내가 신경 쓸 거라고 진심으로 생각하는 건가?",
          ]);
          era.println();
          await you.say_and_wait('！', true);
          await era.printAndWait("순식간에 허점을 찔렸다");
          await era.printAndWait([
            "당시 나는 퇴학 이야기를 듣자마자 허겁지겁 ",
            tachyon.get_colored_name(),
            "을(를) 찾아갔다",
          ]);
          await era.printAndWait([
            "반면 당시 ",
            tachyon.sex,
            "은(는) 평소처럼 실험실에서 실험을 하고 있었다",
          ]);
          await era.printAndWait(
            "계약을 맺을 때의 태도를 봐도 대안이 있어 보이지는 않았다",
          );
          await era.printAndWait([
            "즉……",
            tachyon.sex,
            "은(는) 정말로 퇴학을 신경 쓰지 않는다",
          ]);
          era.println();
          await era.printAndWait([
            "어쩌지…… 이득도 위협도 통하지 않는다",
            tachyon.sex,
            "에게 아직 쓸 수 있는 수가 있을까……",
          ]);
          era.printButton("포기한다", 1);
          era.printButton("계속 생각한다", 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              "속수무책——지금 ",
              you.get_colored_name(),
              "의 처지가 아마 그럴 것이다",
            ]);
            await era.printAndWait([
              "이제 방법이 없다. ",
              tachyon.get_colored_name(),
              "에게는 ",
              tachyon.sex,
              "에게 필요한 것을 굳이 레이스로 얻을 이유가 없다",
            ]);
            await era.printAndWait([
              "그런 ",
              you.get_colored_name(),
              "에게 남은 것은, 스스로 가장 받아들이기 힘들다고 생각했던 방법뿐이다",
            ]);
            era.println();
            await tachyon.say_and_wait([
              "그래서, ",
              callname,
              ", 아직 나를 설득할 방법이 있나?",
            ]);
            era.println();
            await era.printAndWait([
              tachyon.sex,
              "은(는) 재미있다는 듯 ",
              you.get_colored_name(),
              "을(를) 바라보았지만 다음 순간 그 흥미는 놀라움으로 바뀌었다",
            ]);
            await era.printAndWait(
              "이유는 간단하다. 눈앞에서 이야기하던 사람이 갑자기 무릎을 꿇으면 누구라도 놀라기 마련이다",
            );
            era.println();
            era.printButton("「왜냐하면…… 보고 싶으니까」", 1);
            await era.input();
            await you.say_and_wait("타키온이 경기장을 달리는 모습을 보고 싶어");
            await you.say_and_wait([
              "타키온이 다른 ",
              tachyon.uma_sex_title,
              "과(와) 겨룬 끝에 이기는 모습을 보고 싶어",
            ]);
            await you.say_and_wait(
              "타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶어!",
            );
            await era.printAndWait(
              "목소리는 점점 힘을 얻었고 감정에도 열기가 더해졌다. 마지막 말은 거의 외침이었다",
            );
            await era.printAndWait([
              "마지막으로 감정에 호소한다. 가슴속을 있는 그대로 드러내 ",
              tachyon.get_colored_name(),
              "에게 닿기를 바란다",
            ]);
            await era.printAndWait("……아마 나 혼자만의 욕심일 것이다");
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 조마조마한 마음으로 이마를 바닥에 대고 대답을 기다렸다",
            ]);
            era.println();
            await tachyon.say_and_wait("………그런 이유로…… 무릎까지 꿇는 건가?");
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 고개를 들지 않고 무릎을 꿇은 채 있었다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "나는 레이스에 관심 없네. 퇴학도 신경 쓰지 않아",
            );
            await tachyon.say_and_wait([
              "솔직히 말해서 이런 ",
              tachyon.uma_sex_title,
              "을(를) 따라다니는 건 골치 아픈 일이지 않나……",
            ]);
            await tachyon.say_and_wait(
              "내가 자네라면 의견이 맞지 않는 지금 담당 계약 해지를 요구했을 텐데…… 그런데 자네는……",
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              "은(는) ",
              you.get_colored_name(),
              "의 행동을 어떻게 표현해야 할지 몰라 말을 잇지 못했다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "…………자네 머릿속에는 대체 뭐가 들어 있는 건가. 그럴 필요까지 있나? 그럴 가치가 있어?",
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 말없이 고개를 들어 ",
              tachyon.sex,
              "을(를) 바라보았다",
            ]);
          } else {
            await era.printAndWait([
              "문득 ",
              you.get_colored_name(),
              "은(는) ",
              tachyon.sex,
              "의 말에서 무언가 실마리를 잡은 것 같았다",
            ]);
            era.println();
            await era.printAndWait([
              "알게 된 지는 아마, 어쩌면 그리 오래되지 않았을 것이다",
            ]);
            await era.printAndWait([
              "하지만 ",
              you.get_colored_name(),
              "이(가) ",
              tachyon.get_colored_name(),
              "이라는 ",
              tachyon.uma_sex_title,
              "을(를) 이해한 바로는……",
            ]);
            await era.printAndWait([
              tachyon.sex,
              "은(는) 무의미한 일에 시간을 쓰지 않는다",
            ]);
            await era.printAndWait("그렇다. 무의미한 일에는 쓰지 않는다");
            await era.printAndWait("즉, ");
            era.println();
            await era.printAndWait([
              tachyon.sex,
              "이(가) 시간을 할애하는 일에는 반드시 의미가 있다",
            ]);
            await era.printAndWait("그렇다면 질문 1");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 트레센 학원에 들어온 이유는?",
            ]);
            era.println();
            await era.printAndWait([
              "정말 필요가 없었다면 ",
              tachyon.sex,
              "은(는) 그런 선택을 하지 않았을 것이다",
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 트레센에 입학해서 얻는 이익……",
            ]);
            await era.printAndWait([
              "생각할 것도 없다. ",
              tachyon.sex,
              "의 목표만 보아도 충분하다——",
              tachyon.uma_sex_title,
              "의 가능성을 탐구하고 그 가능성의 경계를 넘는 것",
            ]);
            await era.printAndWait([
              "그러려면 먼저 ",
              tachyon.uma_sex_title,
              "의 모든 것을 밝혀낸 뒤에야 한계를 논할 수 있다",
            ]);
            await era.printAndWait([
              "그러니 뛰어난 ",
              tachyon.uma_sex_title,
              "이(가) 가장 많이 모이는 트레센 학원이야말로 최고의 연구 장소다. 이만한 곳은 달리 없다",
            ]);
            await era.printAndWait([
              "따라서 퇴학은 ",
              tachyon.sex,
              "이(가) 말하는 것처럼 아무래도 좋은 일이 아니다",
            ]);
            era.println();
            await era.printAndWait("질문 2");
            await era.printAndWait([
              "왜 ",
              tachyon.get_colored_name(),
              "은(는) 학생으로 학원에 들어왔을까",
            ]);
            era.println();
            await era.printAndWait([
              "트레센에는 학생 외에도 지원 업무를 맡는 직책이 있고, 비경주 ",
              tachyon.uma_sex_title,
              "학과도 있다. 귀찮은 일을 피하려면 처음부터 그쪽으로 가면 되지 않았을까?",
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 번뜩이는 실마리를 잡은 것 같았다",
            ]);
            era.println();
            await era.printAndWait([
              "경주 ",
              tachyon.uma_sex_title,
              "이(가) 되는 이유는 레이스에 나가기 위해서다",
            ]);
            await era.printAndWait([
              "레이스에 나가지 않을 거라면 경주 ",
              tachyon.uma_sex_title,
              "을(를) 선택할 필요가 없다",
            ]);
            await era.printAndWait([
              "여기까지 생각하고 보니 ",
              tachyon.get_colored_name(),
              "이(가) 조금 전 했던 「레이스에 나가고 싶지 않다」는 말은……",
            ]);
            await era.printAndWait([
              "모르겠다. ",
              tachyon.sex,
              "이(가) 거짓말을 하는 이유는 모르겠다. 하지만",
            ]);
            await era.printAndWait(
              "눈앞의 관문을 넘는 데 그 이유까지 알 필요는 없다",
            );
            era.println();
            era.printButton("「신경 쓰고 있어. 실험에는 검증이 필요하니까」", 1);
            await era.input();
            await era.printAndWait("틀림없다");
            await era.printAndWait("그것이 레이스에 나가는 이유다");
            await era.printAndWait("모든 것은 연구와 최종 목표를 위해서다");
            era.println();
            await you.say_and_wait([
              "다른 ",
              tachyon.uma_sex_title,
              ", 심지어 동기조차 이기지 못한다면 속도의 한계를 넘는다는 말은 할 수 없다",
            ]);
            await you.say_and_wait([
              "너도 나도 ",
              tachyon.get_colored_name(),
              "이(가) 누구든 이길 수 있다고 믿어. 그래도 실험을 검증하는 건 필수야",
            ]);
            era.println();
            await era.printAndWait("1+1=2와 같아");
            await era.printAndWait(
              "누구나 답을 알고 있어도 검산과 식은 필요하지",
            );
            await era.printAndWait("불필요한 절차가 아니야. 연구의 엄밀함이지");
            await tachyon.say_and_wait(
              "……제법 그럴듯한 말이군. 하지만 모의 레이스는?",
            );
            await tachyon.say_and_wait(
              "정식 레이스가 아니어도 동기나 더 강한 상대와 겨룰 기회는 찾을 수 있네. 상대가 부족할 걱정도 없지",
            );
            await tachyon.say_and_wait(
              "내가 정말 강함을 보여 준다면, 본능에 빠진 짐승들이 나와 겨룰 기회를 놓칠 리 없지 않나?",
            );
            era.println();
            await era.printAndWait("듣고 보면 설득력이 있다");
            await era.printAndWait([
              "모의 레이스라도 ",
              tachyon.get_colored_name(),
              "처럼 강한 ",
              tachyon.uma_sex_title,
              "과(와) 겨룰 수 있다면 상대가 100%를 발휘하지 않을 걱정은 없다",
            ]);
            await era.printAndWait("하지만……");
            era.println();
            era.printButton(
              `「120%를 발휘한 ${tachyon.uma_sex_title}을(를) 본 적 있어?」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait("…………호오?");
            await era.printAndWait(
              "모의 레이스에서는 언제나 평소의 실력만 낼 수 있어",
            );
            await era.printAndWait(
              "한계를 넘을 수 있는 곳은 진짜 경기장뿐이야",
            );
            await era.printAndWait("예나 지금이나 대이변은 모두 그렇지 않았어?");
            era.printButton(
              `「${tachyon.uma_sex_title}의 특성은 경기장에서만 한계를 뛰어넘는 실력을 발휘할 수 있다는 거야」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              "…………그렇군. 그게 트레이너로서의 견해인가? 그 밖에는? 아직 이유가 더 있나?",
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              "은(는) 여전히 말로 표현하기 어려운 장난기 어린 눈으로 ",
              you.get_colored_name(),
              "을(를) 바라보았다. ",
              you.get_colored_name(),
              "은(는) 조금 불안해졌다",
            ]);
            await era.printAndWait([
              "그래도 ",
              you.get_colored_name(),
              "은(는) 가슴 가장 깊은 곳에 묻어 두었던 이유를 꺼냈다",
            ]);
            era.println();
            era.printButton("「…………보고 싶어」", 1);
            await era.input();
            await tachyon.say_and_wait("응?");
            await tachyon.say_and_wait('…………');
            await you.say_and_wait("타키온이 경기장을 달리는 모습을 보고 싶어. ");
            await you.say_and_wait([
              "타키온이 다른 ",
              tachyon.uma_sex_title,
              "과(와) 겨룬 끝에 이기는 모습을 보고 싶어",
            ]);
            await you.say_and_wait(
              "타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶어",
            );
            era.println();
          }
          await era.printAndWait([
            tachyon.sex,
            "은(는) ",
            you.get_colored_name(),
            "의 표정을 찬찬히 살피다가 ",
            you.get_colored_name(),
            "의 눈에 시선을 멈췄다. 처음 만났을 때처럼 ",
            you.get_colored_name(),
            "의 눈동자 깊숙한 곳을 응시했다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "…………후후, 광인에게 광인이라? 재미있어, 실로 재미있군!",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 갑자기 웃음을 터뜨린 ",
            tachyon.sex,
            "을(를) 불안한 눈으로 바라보았다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "의 기분이 어째서 이렇게 크게 바뀌었는지는 잘 모르겠다. 하지만…… 상황은 ",
            you.get_colored_name(),
            "에게 유리한 쪽으로 기울고 있는 걸까?",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "그렇다면 실험동물의 의욕을 위해 가끔은 적절한 보상도 필요하겠지. ",
          );
          await tachyon.say_and_wait(
            "알겠네. 레이스에는 나가도록 하지. 달리는 김에 우선 클래식 3관부터 가볍게 따고서……",
          );
          await tachyon.say_and_wait([
            "못 하겠다는 말은 하지 않겠지, ",
            callname,
            '？',
          ]);
          era.println();
          await era.printAndWait(["하지만 ", tachyon.sex, "은(는) 덧붙였다"]);
          era.println();
          await tachyon.say_and_wait([
            "그 대신…… 나를 지루하게 만들지는 말게, ",
            callname,
          ]);
        } else {
          era.printButton("「왜냐하면 보고 싶으니까」", 1);
          await era.input();
          await tachyon.say_and_wait("……뭐라고?");
          await you.say_and_wait("타키온이 경기장을 달리는 모습을 보고 싶어. ");
          await you.say_and_wait([
            "타키온이 다른 ",
            tachyon.uma_sex_title,
            "과(와) 겨룬 끝에 이기는 모습을 보고 싶어",
          ]);
          await you.say_and_wait(
            "타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶어",
          );
          await era.printAndWait("그리고 그 밖에도……");
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 생각하다가 말을 덧붙였다",
          ]);
          era.println();
          await you.say_and_wait(
            "물론 혹시, 정말로 만에 하나 그런 일이 생긴다면, 타키온이 져서 땅에 엎드려 분해하는 모습도 보고 싶어!",
          );
          await tachyon.say_and_wait('！');
          era.println();
          era.printButton("(어라, 반대로 자극하니까 통했나?)", 1);
          await era.input();
          await you.say_and_wait(
            "「다만 타키온이 지는 게 두렵다면 이해해. 그렇다면 안 나가는 편이 낫겠지……」",
          );
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 일부러 ",
            tachyon.get_colored_name(),
            "을(를) 힐끗 보았다가 ",
            tachyon.sex,
            "의 태도가 심상치 않자 황급히 입을 닫았다. 여기서 물러날 때다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "……나에게 칼리굴라 효과를 써먹다니, ",
            callname,
            ", 꽤나 대담하군",
          ]);
          await you.say_and_wait("아니…… 궤엑!!?");
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 반박하려 했지만, 일어선 ",
            tachyon.get_colored_name(),
            "이(가) 중력가속도를 실어 배 위로 내려앉는 바람에 개구리 짓눌리는 듯한 소리를 냈다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "흥…… 자네 개인의 욕심을 위해 천재인 내 귀중한 시간을 이런 시시한 짐승들의 다툼에 쓰라는 건가? 참으로 대담무쌍하군",
          ]);
          era.printButton("「그런 뜻이 아니라……」", 1);
          await era.input();
          await you.say_and_wait(
            "게다가 레이스에 나가면 필요한 실험 데이터도 모을 수 있잖아……",
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 자세를 고쳐 앉으며 ",
            you.get_colored_name(),
            "을(를) ",
            tachyon.sex,
            "이(가) 가장 편히 앉을 수 있는 인간 의자로 만들었다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "도 자연스럽게 손을 들어 ",
            tachyon.sex,
            "의 어깨를 주물렀다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "후우…… 살겠군. 요즘 계속 실험대 앞에만 있었더니 온몸이 쑤셔서 말이야……",
          );
          await tachyon.say_and_wait("레이스 출전이라……");
          await tachyon.say_and_wait(
            "못 할 것도 없지. 우선 목표는 3관으로 해 두겠네. ",
          );
          await tachyon.say_and_wait(
            "동기 중 최고도 되지 못한다면 한계를 논할 자격도 없으니까……",
          );
          await tachyon.say_and_wait([
            "그럼, ",
            callname,
            ", 온 힘을 다해 나를 보좌해 주겠지?",
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            tachyon.sex,
            "의 광기 어린 눈을 보고 웃으며 말했다",
          ]);
          era.printButton("「당연하지」", 1);
          await era.input();
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "과(와) ",
          tachyon.get_colored_name(),
          "의 목표가 정해졌다",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = "과제의 실현 가능성";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        tachyon.uma_sex_title,
        "과(와) 트레이너의 첫 만남이 두 사람의 톱니바퀴가 돌아가기 시작한 순간이었다면",
      ]);
      await era.printAndWait("오늘은 그 톱니바퀴 소리가 세상을 뒤흔드는 순간이다");
      await era.printAndWait([
        "…………적어도 다른 ",
        tachyon.uma_sex_title,
        "들에게는",
      ]);

      era.printButton("「타키온!」", 1);
      await era.input();
      await era.printAndWait([
        "자신의 ",
        tachyon.uma_sex_title,
        "이(가) 정말 그런 서사시의 서막 같은 감상에 젖어 있다면, 중요한 레이스를 앞둔 시간을 다른 ",
        tachyon.uma_sex_title,
        "들과 잡담하는 데 쓰지는 않을 것이다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그러니 이른바 시간이란 인간이 부여한 정의에 불과하네. 인간이 만든 단위이니 빠르다는 것도 느리다는 것도 상대적인 개념이지…………",
      );
      await tachyon.say_and_wait(["호오, ", callname, "? 왔군"]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 말문이 막혔다. 몇 분 뒤면 출전 ",
        tachyon.uma_sex_title,
        "들이 입장한다. 이론상 평생 단 한 번뿐인 데뷔전이다. ",
      ]);
      await era.printAndWait([
        "인기 순위 최상위인 주인공 ",
        tachyon.sex,
        "이(가) 출발 직전까지 남들과 잡담이나 하고 있다니. 그것도 이런 주제로",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        tachyon.get_colored_name(),
        "의 이야기에 푹 빠져 있던 아이들에게 작별 인사를 하고 ",
        tachyon.get_colored_name(),
        "을(를) 지하 통로로 끌고 갔다",
      ]);
      if (you.sex_code === 1) {
        era.println();
        await tachyon.say_and_wait([
          "남자가 그렇게 조급하게 굴면 미움받는다네, ",
          callname,
        ]);
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 여전히 느긋하게 ",
        you.get_colored_name(),
        "의 뒤를 따라 걸었다",
      ]);
      await era.printAndWait([
        "두 사람의 발소리가 텅 빈 지하 통로에 울려 퍼지며 잠시 어색한 공기가 흘렀다",
      ]);

      era.printButton("「……너, 사람들과 잘 어울리는구나」", 1);
      await era.input();
      await era.printAndWait([
        "입을 열고 보니 누가 봐도 어색함을 메우려는 말이었다. 하지만 ",
        tachyon.get_colored_name(),
        "은(는) 그 어색함을 눈치채지 못했는지, 아니면 모르는 척하는 건지 대답했다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "당연하지. 가끔은 개인 이미지도 관리해 줘야 실험체가 끊기지 않으니까",
      );
      era.println();
      await era.printAndWait(
        "정말 이미지를 신경 쓴다면 평소부터 이상한 짓을 하지 마……",
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        ", 아직 멀었군. 이미지라는 건 말이지, 사람들은 악인에게는 이유를 붙여 주고 선인에게는 흠을 찾고 싶어 하는 법일세",
      ]);
      await tachyon.say_and_wait(
        "그들은 완벽한 인격을 만들어 들춰내는 것보다, 미친 과학자가 남들과 어울리지 못하는 이유를 찾아 동정하는 쪽을 더 좋아하지",
      );
      era.println();
      await era.printAndWait([tachyon.sex, "은(는) 차갑게 웃었다"]);
      era.println();
      await tachyon.say_and_wait([
        "조금 전 대화는 씨앗을 심었을 뿐일세. 이따 레이스에서 이기면 오늘의 이야기는 ",
        tachyon.couple_title,
        "들의 마음에 뿌리를 내리겠지",
      ]);
      await tachyon.say_and_wait(
        "훗날 곤란한 일이 생기면 자연스레 『친절한 타키온 선배』를 찾아올 테고. ",
      );
      await tachyon.say_and_wait([
        "자비로운 나는 물론 무상으로 ",
        tachyon.couple_title,
        "들을 도와줄 걸세",
      ]);
      await tachyon.say_and_wait(
        "다만 보답으로 실험 데이터를 기록하게 해 주는 건 당연한 일이겠지?",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 식은땀을 흘렸다. 이미지를 위해서겠거니 했지만 이렇게 멀리 내다봤을 줄은 몰랐다",
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait("이런, 이런. 누군가 질투하는 건가?");
        era.println();
        await era.printAndWait([
          "뭔가 오해라도 했는지 ",
          tachyon.get_colored_name(),
          "은(는) 갑자기 ",
          you.get_colored_name(),
          "에게 몸을 밀착했다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "은(는) 뒤에서 ",
          you.get_colored_name(),
          "을(를) 끌어안았다. 가느다란 손이 불순하게 ",
          you.get_colored_name(),
          "의 몸을 더듬다가 마침내 서류 아래에 가려진 곳에 멈췄다",
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await era.printAndWait([
            tachyon.sex,
            "은(는) 바지 너머로 불룩한 윤곽을 천천히 따라갔다. ",
            you.get_colored_name(),
            "의 몸이 깨어남에 따라 윤곽을 그리던 손길은 움켜쥐고 훑는 움직임으로 바뀌었다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "안심하게. 여자보다는 가득 채워지는 느낌을 더 좋아하니까",
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) ",
            you.get_colored_name(),
            "의 귀에 입을 가까이 대고 향기로운 숨결로 속삭였다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "다만…… 자네가 여자가 된다면 받아들일 수도 있겠군?",
          );
          era.println();
        }
        await era.printAndWait([
          tachyon.sex,
          "은(는) 큭큭 웃더니 ",
          you.get_colored_name(),
          "을(를) 놓아주고 혼자 경기장으로 걸어갔다",
        ]);
      }
      era.printButton(
        "「……아무리 그래도 이기지 못하면 그 계산은 전부 물거품이 되잖아?」",
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "은(는) 돌아보지 않고 빛을 향해 곧장 걸었다",
      ]);
      await era.printAndWait([
        "어두운 지하 통로에서 갑자기 밖을 보자 ",
        you.get_colored_name(),
        "은(는) 눈이 아플 만큼 빛이 눈부셨다",
      ]);
      await era.printAndWait([
        "눈물 너머로 비치는, 경기장에 올라서는 ",
        tachyon.sex,
        "은(는) 빛 속에 녹아드는 것처럼 보였다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "자네는 여기서 얌전히 내 개선을 기다리고 있으면 되네",
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = "연구 기반과 작업 여건";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      era.printButton("「최고의 달리기였어! 빛 같았다고!」", 1);
      await era.input();
      await tachyon.say_and_wait([
        "실험을 검산한 것뿐인데 그렇게 기뻐하다니. ",
        callname,
        ", 참 단순하군…… 앗!",
      ]);
      era.printButton("왜 그래!", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 갑자기 소리를 낸 ",
        tachyon.get_colored_name(),
        "을(를) 보고 가슴이 철렁했다",
      ]);
      await you.say_and_wait("레이스가 끝나고…… 설마 다리가……", true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 황급히 ",
        tachyon.get_colored_name(),
        "의 다리를 확인하려 했지만……",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "이런, 이런! 게이트에 설치한 스타트 속도 기록 장치를 회수하는 걸 잊었네!",
      );
      era.println();
      if (relation > 225) {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 안도의 숨을 내쉬었다. 그런 이유였구나",
        ]);
        era.printButton("「괜찮아. 스타트 속도는 이미 기록해 뒀어」", 1);
        await era.input();
        await era.printAndWait([
          "마음이 통한다고까지는 할 수 없다. 하지만 ",
          tachyon.get_colored_name(),
          "의 트레이너로서 ",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "이(가) 원하는 데이터는 대충 안다. 애초에 경기장을 달리는 ",
          tachyon.sex,
          "이(가) 신경 쓸 일이 아니다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "오오! 잘했네, ",
          callname,
          "! 지금 바로 확인하지!",
        ]);
        era.println();
        await era.printAndWait([
          "방금 거둔 승리도 곧 시작할 위닝 라이브도 두 사람의 눈에는 들어오지 않았다. 방금 레이스를 뛴 것이 아니라 그저 연구를 했던 것처럼",
        ]);
        era.println();
        await era.printAndWait([
          "기록한 데이터를 거듭 살펴보고 가설을 세우다가, 위닝 라이브가 시작되어 밖에서 다급한 노크 소리가 들리고서야 정신을 차렸다",
        ]);
      } else {
        await era.printAndWait("그, 그게 무슨 소리야!?");
        await era.printAndWait(
          "게이트에서 출발을 기다리는 동안 그런 걸 할 여유가 있었어?",
        );
        await era.printAndWait(
          "아니, 애초에 게이트에 멋대로 센서를 달지 마",
        );
        await era.printAndWait([you.get_colored_name(), "은(는) 속이 쓰렸다"]);
        era.println();
        await era.printAndWait([
          "그 뒤 장비를 회수하기 위해 ",
          you.get_colored_name(),
          "과(와) ",
          tachyon.get_colored_name(),
          "은(는) 경기장에 잠입했다……",
        ]);
        await era.printAndWait([
          "당연히 URA에 들켰고, 거듭 사과한 끝에 ",
          tachyon.get_colored_name(),
          "은(는) 장비를 회수할 수 있었다. 모두 순조롭게 끝났다",
        ]);
        await era.printAndWait([
          "……다만 회수하는 동안 직원들의 시선이 조금 따가웠을 뿐이다",
        ]);
        era.println();
        await era.printAndWait("【명성이 하락했다!】");
      }
    };
    f.title = title;
    return f;
  })(),
  ws_36: (() => {
    const title = "연간 연구 계획 수립";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} pocket ダンツフレーム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} hope_sta ホープフルステークス（色付き名）
     */
    const f = async (
      tachyon,
      pocket,
      you,
      callname,
      relation,
      love,
      hope_sta,
    ) => {
      await era.printAndWait([
        "데뷔전으로부터 두 달 뒤 ",
        you.get_colored_name(),
        "은(는) 갑자기 ",
        tachyon.get_colored_name(),
        "에게 실험실로 불려 갔다",
      ]);
      await era.printAndWait("늘 그렇듯 실험용 약 때문인 줄 알았는데……");
      era.println();
      await tachyon.say_and_wait([
        callname,
        ", 12월 말에 열리는 ",
        hope_sta,
        "에 나가겠네. 수속을 밟아 주게",
      ]);
      era.printButton("「어? 호프풀 스테이크스?」", 1);
      await era.input();
      await tachyon.say_and_wait("흠? 무슨 문제라도 있나?");
      era.println();
      await era.printAndWait([
        "들어오자마자 ",
        tachyon.get_colored_name(),
        "은(는) 저녁 메뉴라도 이야기하듯 가벼운 어조로 ",
        you.get_colored_name(),
        "에게 말했다",
      ]);
      await era.printAndWait([
        "호프풀 스테이크스…… 12월 말의 G1 중거리 레이스. 주니어급 ",
        tachyon.uma_sex_title,
        "에게는 가장 중요한 경주 중 하나다",
      ]);
      await era.printAndWait("일정이라면…… 아직 두 달 남았다. 지금 등록하면 늦지 않는다");
      await era.printAndWait([
        "이길 수 있을까…… 생각할 것도 없다. 세상에서 가장 빠른 것은 광속이고, 광속보다 빠른 것은 ",
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait("유일한 문제는 왜 굳이 나가느냐는 것이다");
      await era.printAndWait([
        "레이스에 별 관심이 없던 ",
        tachyon.get_colored_name(),
        "이(가) 왜 특정 경주에 나가고 싶어 하는 걸까?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 그 의문을 그대로 입 밖에 냈다",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 대답 대신 책상 위의 신문을 두드렸다. 오늘 자 스포츠면이었다. 기억하기로는……",
      ]);
      await era.printAndWait([
        "오늘 가장 큰 뉴스는 「",
        pocket.get_colored_name(),
        "과(와) 쿠로후네, ",
        hope_sta,
        " 출전 확정」",
      ]);
      era.println();
      await era.printAndWait([
        "그렇군……",
        pocket.get_colored_name(),
        "도 쿠로후네도 이 세대에서 가장 주목받는 대표 주자다",
      ]);
      await era.printAndWait([
        "아무리 그래도 ",
        tachyon.get_colored_name(),
        "에게도 동세대의 강자와 부딪쳐 보고 싶은 마음은 있겠지……",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "물론 신약 실험일세! 강적이 없는 레이스에서 한계까지 몰아붙일 수 있겠나? 한계에 닿지 않으면 약의 도움도 필요 없으니까",
      );
      era.println();
      await era.printAndWait("아아…… 어차피 그렇게 흘러갈 줄 알았어…… 응?");
      era.printButton("「잠깐, 레이스에서 약물을 쓰는 건…… 규정 위반이잖아?」", 1);
      await era.input();
      await tachyon.say_and_wait([
        "응? 그걸 걱정하는 건가, ",
        callname,
        ". 안심하게. 삼류 약물 검사 기술로 내 약을 알아낼 수 있을 것 같나?",
      ]);
      era.println();
      await you.say_and_wait("아니! 그게 문제가 아니잖아!");

      era.printButton(
        "「그건…… 조금…… 스포츠 정신에…… 어긋나지 않을까……?」",
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 신중하게 말을 골랐다. 상대를 자극할 만한 단어는 피했다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "응? ",
        callname,
        "? 설마 내가 쓰는 약이 흥분제 같은 거라고 생각하나? 자네가 보는 나는 그런 사람인가?",
      ]);
      era.println();
      await era.printAndWait([
        "잘못한 쪽이 오히려 큰소리치는 건가? ",
        you.get_colored_name(),
        "은(는) 황급히 고개를 저었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……안심하게. 흥분제도 아니고 경기장에서 속도를 올려 주는 효과도 없으니까……",
      );
      await tachyon.say_and_wait(
        "다만 충분히 강한 상대가 없으면 효과를 측정할 수 없는 약이기는 하지",
      );
      era.println();
      era.print([tachyon.sex, "의 말을 듣고 ", you.get_colored_name(), '……']);
      era.printButton("믿는다", 1);
      era.printButton("반신반의한다", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          "그렇구나. ",
          you.get_colored_name(),
          "은(는) ",
          tachyon.sex,
          "의 설명을 듣고 고개를 끄덕였다. 아무 말 없이 ",
          tachyon.get_colored_name(),
          "의 출전 수속을 밟으러 가려 하자, 오히려 ",
          tachyon.get_colored_name(),
          "이(가) 당황했다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "아니, 아니……",
          callname,
          ", 내 말을 그렇게 믿는 건가?",
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 고개를 끄덕였다. 왜 ",
          tachyon.get_colored_name(),
          " 본인이 놀라는지 알 수 없었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "만에 하나 내가, 만에 하나 그게 정말…… 그러니까, 만약 내가 자네를 속인 거라면?",
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), "에게 속는다면……"]);
        await era.printAndWait("생각해 본 적도 없다. 하지만 혹시, 만에 하나 그렇다면");

        era.printButton("「속아도 상관없어」", 1);
        await era.input();
        await era.printAndWait("그날부터 결심했다");
        await era.printAndWait([tachyon.sex, "의 가능성과 모든 것을 믿기로"]);
        await era.printAndWait([
          tachyon.sex,
          "이(가) 더 먼 세상을 볼 수만 있다면 속는 게 무슨 대수인가",
        ]);
        era.println();
        await tachyon.say_and_wait("……신뢰, 아니, 맹신인가?");
        era.println();
        await era.printAndWait("맹신");
        await era.printAndWait("생각해 보면 그 말이 맞다");
        await era.printAndWait([
          "나는 ",
          tachyon.get_colored_name(),
          " 때문에 다른 것이 보이지 않게 된 눈먼 사람이다",
        ]);
        await era.printAndWait([
          "눈이 멀었기에 빛을 갈구하고, 가장 눈부신 ",
          tachyon.sex,
          "을(를) 갈구한다",
        ]);
        era.println();
        if (relation <= 375) {
          await tachyon.say_and_wait([
            "후후후, 좋네. 그렇다면 내 발걸음을 따라오게, ",
            callname,
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 소매를 털며 실험으로 돌아갔다. 이 이야기는 끝이라는 뜻이었다",
          ]);
          era.println();
          await era.printAndWait("끝내기 전에 마지막으로 한마디");
          era.println();
          await tachyon.say_and_wait(
            "포상일세. 약속하지. 자네는 특등석에서 가능성 너머의 세계를 목격하게 될 걸세!",
          );
        } else {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            "어째서인지 ",
            tachyon.get_colored_name(),
            "은(는) 불만스러워 보였다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "평소라면 지금쯤 기뻐해야겠지. 모르모트로서 충성심을 보여 주고 있으니 말이야",
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 언짢은 표정으로 ",
            you.get_colored_name(),
            "의 가슴을 쿡 찔렀다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "하지만 이런 맹종은 싫네. 의견도 내지 못하는 실험동물이 아니라, 조언을 해 주고 곁에서 함께 걷는 동료가 되어 줬으면 하니까",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 자신의 태도를 조금 반성하고, 달라지기 위해 질문을 던졌다",
          ]);
          era.printButton("「그럼 그렇게 하는 이유는……?」", 1);
          await era.input();
          await tachyon.say_and_wait("…………미안하네. 지금은 아직 말해 줄 수 없어");
          await tachyon.say_and_wait(
            "언젠가는 꼭 말하지. 하지만…… 지금은 아니야. 보장하겠네. 지금은 우선 나를 믿어 주겠나?",
          );

          era.printButton("「방금은 맹신하지 말라며?」", 1);
          await era.input();
          await tachyon.say_and_wait(
            "그건, 그러니까…… 다르다네. 아까는 이유 없이 믿는 것이고, 지금은 이유가 있지만 말할 수 없다는 걸 믿는 거지",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 아직 그 차이를 잘 모르겠다. 하지만 현명하게도 논쟁은 피했다",
          ]);
          era.println();
          await era.printAndWait([
            "아무튼 ",
            you.get_colored_name(),
            "과(와) ",
            tachyon.get_colored_name(),
            "의 다음 목표는 ",
            hope_sta,
            "으로 정해졌다",
          ]);
          await era.printAndWait([
            "사고만 없다면 ",
            tachyon.sex,
            "을(를) 출전시켜도 문제는 없겠지……",
          ]);
        }
      } else {
        era.println();
        await you.say_and_wait("정말일까?", true);
        await era.printAndWait([
          you.get_colored_name(),
          "의 마음에는 여전히 의심이 남았다. 하지만……",
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 어깨를 으쓱하고 ",
          tachyon.get_colored_name(),
          "의 출전 신청을 준비하기 시작했다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          "? 내가 이런 말을 하는 것도 이상하지만, 조금도 의심하지 않는 건가? 그렇게 믿어?",
        ]);
        era.printButton(
          "「믿지 않아. 하지만 약 없이도 타키온은 이길 수 있다고 믿어」",
          1,
        );
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 행동은 종잡을 수 없고 약의 작용도 모른다",
        ]);
        await era.printAndWait([
          "애초에 ",
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "이(가) 「규정상 안 돼」라는 말을 듣고 순순히 손을 뗄 사람이라고 생각하지 않는다",
        ]);
        await era.printAndWait("하지만 이 한 가지에는 의심의 여지가 없다");
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 약물이라는 외력 없이도 반드시 이길 수 있다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "에게 흥분제는 필요 없다. ",
          you.get_colored_name(),
          "은(는) 오직 그것만을 믿는다",
        ]);
        era.println();
        if (relation > 0 && love < 50) {
          await tachyon.say_and_wait(
            "그게 대답인가? 나는 믿지 않지만 내 재능은 믿는다? 좋아! 그거야말로 연구자의 자세일세!",
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 내 대답에 만족했는지 「그래, 그래」 하며 고개를 끄덕였다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "그럼 내 승리를 믿게. 뒤따라오기만 하면 자네가 바라던 빛을 보여 주지",
          );
          era.println();
          await era.printAndWait([
            "이렇게 ",
            you.get_colored_name(),
            "과(와) ",
            tachyon.get_colored_name(),
            "의 다음 목표는 ",
            hope_sta,
            "으로 정해졌다",
          ]);
          await era.printAndWait(
            "다만…… 멋진 말로 마무리하긴 했지만, 정말 출전시켜도 괜찮을까. 조금 더 생각해 볼 필요가 있을지도 모른다",
          );
        } else {
          if (relation <= 0) {
            await tachyon.say_and_wait(
              "……평소에도 그렇게 듣기 좋게 말하면 좋으련만",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 차갑게 말했다. 하지만 ",
              tachyon.sex,
              "의 꼬리는 흔들리고 있었다. 싫지는 않은 모양이다",
            ]);
          } else {
            era.println();
            await tachyon.say_and_wait([
              callname,
              "……그 말투는 날 조금도 믿지 않는다는 것 같군",
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 불만스럽게 입술을 내밀고 홱 고개를 돌렸다",
            ]);
            era.println();
            await era.printAndWait("믿어도 안 되고 안 믿어도 안 되는 건가……");
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 이마를 짚고 아이를 달래듯 ",
              tachyon.get_colored_name(),
              "에게 얼마나 믿고 얼마나 사랑하는지 이야기했다. 그러고서야 ",
              tachyon.sex,
              "의 기분을 풀어 줄 수 있었다",
            ]);
          }
          era.println();
          await era.printAndWait([
            "이렇게 ",
            you.get_colored_name(),
            "과(와) ",
            tachyon.get_colored_name(),
            "의 다음 목표는 ",
            hope_sta,
            "으로 정해졌다",
          ]);
          await era.printAndWait([
            "다만…… 말은 그렇게 해도 이런 ",
            tachyon.sex,
            "을(를) 경기장에 내보내도 정말 괜찮을까. 역시 고민이 필요할지도 모른다",
          ]);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_hope_sta: (() => {
    const title = "과제 연구 추진";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     */
    const f = async (tachyon, you, callname, hope_sta) => {
      await era.printAndWait("마침내 이날이 왔다");
      await era.printAndWait([
        hope_sta,
        "——막 데뷔한 ",
        tachyon.uma_sex_title,
        "들에게는 하반기에서 가장 중요한 레이스라고 해도 좋다",
      ]);
      await era.printAndWait("3관 노선을 목표로 한다면 더더욱 그렇다");
      await era.printAndWait([
        "주니어급의 유일한 중거리 G1. 재능 있는 ",
        tachyon.uma_sex_title,
        "이(가) 꿈을 향한 여정에 내딛는 첫걸음. ",
      ]);
      era.println();
      await era.printAndWait([
        "그토록 중요한 날인데 ",
        you.get_colored_name(),
        "의 담당 ",
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        "은(는)……",
      ]);
      era.println();
      await you.say_and_wait("어라?");
      era.println();
      await era.printAndWait([
        "어디선가 돌아다니고 있을 줄 알았던 ",
        tachyon.get_colored_name(),
        "이(가) 오늘은 드물게 대기실에 얌전히 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait(["호오, ", callname, ", 왔군"]);
      era.println();
      await era.printAndWait([
        "대기실에서 다리에 정체 모를 스프레이를 뿌리고 있던 ",
        tachyon.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "을(를) 한 번 올려다보고는 다시 손에 든 스프레이에 집중했다",
      ]);

      era.printButton("「그게 말했던 약이야?」", 1);
      await era.input();
      await tachyon.say_and_wait("그래. 이번 레이스에서 도움이 되면 좋겠군……");
      await tachyon.say_and_wait(
        "이제 와서 숨길 이유도 없지. 이건 다리 근육을 풀어 주는 약일세……",
      );
      await tachyon.say_and_wait(
        "냉각 스프레이와 비슷하지. 레이스 뒤에 생길 부상을 막으려고 미리 쓰는 거라네. 이번 실험이 성공하면……",
      );
      era.println();
      await era.printAndWait("그렇구나");
      await era.printAndWait([
        "그 말을 듣고 ",
        you.get_colored_name(),
        "은(는) 저도 모르게 안도의 숨을 내쉬었다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "을(를) 믿고 있다고 생각하면서도 마음 깊은 곳에는 아무래도 한 가닥 불안이 남는다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        " 본인을 의심하는 것은 아니다. ",
        tachyon.get_colored_name(),
        "의 약이 매번 정확히 효과를 내는 것은 아니라는 뜻이다…… 그렇지 않았다면 지금도 온몸에서 빛이 날 리 없으니까",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "좋아, 준비는 만전일세. ",
        callname,
        ", 가도록 하지",
      ]);
      era.println();
      await era.printAndWait("목소리가 들뜬 것은 경기장의 분위기 때문일까");
      await era.printAndWait("눈이 빛나는 것은 라이벌에 대한 기대 때문일까");
      await era.printAndWait("아니면……");
      era.println();
      await tachyon.say_and_wait(
        "오늘 상대가 약효를 최대한 끌어내 주면 좋겠군",
      );
      era.println();
      await era.printAndWait("역시 실험 때문인가");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 여느 때와 다름없는 ",
        tachyon.sex,
        "이(가) 코스로 향하는 모습을 배웅했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = "희망";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     */
    const f = async (tachyon, you, hope_sta) => {
      era.printButton("「너무 강하잖아!」", 1);
      await era.input();
      await era.printAndWait([
        "처음으로 나선 G1. 그 주인공이 ",
        tachyon.get_colored_name(),
        "이라 해도 ",
        you.get_colored_name(),
        "은(는) 식은땀을 흘리지 않을 수 없었다",
      ]);
      await era.printAndWait([
        "하지만 국내 최고의 무대에서도 ",
        tachyon.sex,
        "이(가) 보여 준 것은 다른 이들을 뛰어넘는 강함이었다",
      ]);
      era.println();
      await tachyon.say_and_wait("쿠후후, 그렇게 흥분하다니…… 호들갑도 심하군");
      era.println();
      await era.printAndWait([
        "코스를 나와 대기실로 돌아온 ",
        tachyon.get_colored_name(),
        "의 목소리에도 즐거움이 섞여 있었다",
      ]);
      await era.printAndWait([
        "그 목소리를 듣자 ",
        you.get_colored_name(),
        "도 알 수 있었다",
      ]);
      era.printButton("「실험은 성공했구나?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "그래, 그래! 역시 좋은 실험 대상은 중요하다니까! 오늘 실험은 대성공일세!",
      );
      era.println();
      await era.printAndWait([
        "역시 ",
        tachyon.get_colored_name(),
        "에게는 G1조차 조금 큰 실험장에 불과한 모양이다",
      ]);
      await era.printAndWait([
        "그런데도 ",
        tachyon.sex,
        "은(는) 다른 이들을 압도하는 달리기를 보여 줬다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그런 것보다 어서 돌아가지. 다음 레이스를 준비해야 하니까!",
      );
      era.println();
      await you.say_and_wait("어? 갑자기 의욕이……?");
      await you.say_and_wait(
        "설마 레이스에 대한 열정에 눈뜬…… 건 아니겠지",
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        "다음 레이스에서 할 실험의 청사진이 벌써 머릿속에 있다네! 하하하!",
      );
      era.println();
      await era.printAndWait(
        "……뭐, 됐다. 실험에 대한 열정도 열정에 눈뜬 셈이겠지",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        tachyon.get_colored_name(),
        "의 ",
        hope_sta,
        "은(는) 그렇게 막을 내렸다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_lose: (() => {
    const title = "희망";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        "레이스가 끝난 뒤 ",
        you.get_colored_name(),
        "은(는) 말없이 대기실로 돌아가는 ",
        tachyon.get_colored_name(),
        "을(를) 바라보았다",
      ]);
      await era.printAndWait("돌아오는 동안 아무도 입을 열지 않았다");
      await era.printAndWait([
        "이번 패배는 ",
        you.get_colored_name(),
        "에게도 ",
        tachyon.sex,
        "에게도 큰 타격이었다",
      ]);
      era.println();
      await tachyon.say_and_wait("……실험 실패로군");
      era.println();
      await era.printAndWait([
        "이번 레이스의 ",
        tachyon.get_colored_name(),
        "은(는) 분명히 상태가 이상했다……",
      ]);
      await era.printAndWait([
        "보통 사람은 몰랐을 것이다. 하지만 오늘의 달리기에는 ",
        tachyon.sex,
        "이(가) 지닌 그…… 빛이 없었다",
      ]);
      await era.printAndWait([
        "처음부터 흐렸던 빛은 후반에 거의 사라졌고 ",
        tachyon.get_colored_name(),
        "은(는) 패배했다",
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        "「……마음에 담아 두지 마. 실험 한 번 실패했을 뿐이야. 돌아가자. 실험에 무조건 성공이란 건 없잖아」",
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 저도 모르게 ",
        tachyon.sex,
        "을(를) 위로했다",
      ]);
      await era.printAndWait([
        "하지만 바닥에 앉은 ",
        tachyon.sex,
        "의 표정은 어째서인지 이상했다",
      ]);
      await era.printAndWait("후회하는 표정이 아니다. 오히려…… 무언가를 참는 듯한?");

      era.printButton("「타키온……? 몸은……」", 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait(
          "아무것도 아니네. 걱정할 것 없어…… 가도록 하지",
        );
        era.println();
        await era.printAndWait([
          "아직은 ",
          tachyon.sex,
          "의 마음의 벽을 허물 수 없는 건지도 모른다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 아무 말 없이 ",
          tachyon.sex,
          "의 뒤를 따라 나갔다",
        ]);
      } else {
        await tachyon.say_and_wait([
          "……괜찮네, ",
          callname,
          ". 다리는…… 문제없어. 다음에 조정하면 괜찮을 걸세",
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          " 쪽에서 먼저 위로하며 ",
          you.get_colored_name(),
          "을(를) 안심시키려 했다",
        ]);
        await era.printAndWait([
          "늘 자신만만하던 ",
          tachyon.sex,
          "을(를) 떠올리자 ",
          you.get_colored_name(),
          "의 마음도 차츰 진정되었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          {
            content: "…………대안인가…… 아니면……",
            fontSize: '0.75rem',
          },
        ]);
        era.println();
        await era.printAndWait([
          "하지만 아무도 듣지 않는 줄 알고 중얼거린 그 말이 ",
          you.get_colored_name(),
          "의 마음을 다시 불안하게 만들었다",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = "연간 심사";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {boolean} hope_sta_win ホープフルステークスに勝ったか
     */
    const f = async (tachyon, you, callname, relation, hope_sta_win) => {
      await tachyon.say_and_wait([
        "호오, ",
        callname,
        ", 그건…… 새해 첫 붓글씨인가?",
      ]);
      era.println();
      await era.printAndWait([
        "노크도 하지 않고 트레이너실에 들어온 ",
        tachyon.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "의 손을 보고 고개를 갸웃했다. ",
        you.get_colored_name(),
        "은(는) 고개를 끄덕였다",
      ]);
      era.println();
      await era.printAndWait([
        "오늘은 새해 첫날. ",
        you.get_colored_name(),
        "은(는) 새해 소망을 적고 있던 참이었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "3관…… 이봐, ",
        callname,
        ". 내가 할 말은 아닐지도 모르지만, 꽤나 집념이 강하군. 3관에 특별한 의미라도 있나?",
      ]);
      era.println();
      await you.say_and_wait("의미라…… 특별히 없다. 굳이 말하자면");
      era.printButton(
        "「타키온이 출전하겠다고 약속했으니까…… 그리고 타키온은 지지 않을 거라고 생각해」",
        1,
      );
      await era.input();
      if (hope_sta_win) {
        if (relation > 0) {
          await tachyon.say_and_wait(
            "흐흥, 좋네. 천재인 나는 확실히 무패니까",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 의기양양하게 말했다",
          ]);
        } else {
          await tachyon.say_and_wait(
            "승패 같은, 실험과 관계없는 일에 용케도 그렇게 열을 올리는군",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 차갑게 말했다",
          ]);
        }
      } else {
        await tachyon.say_and_wait([
          '…………',
          callname,
          ", 내가 이미 졌다는 걸 잊었나?",
        ]);
        era.println();
        await era.printAndWait("……아, 그러고 보니 그런 일도 있었지……");
        era.printButton("「그래도 타키온이 최강이야!」", 1);
        await era.input();
        await tachyon.say_and_wait(
          "…………그 정도로 낙관적이면 할 말도 없군",
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 저도 모르게 이마를 짚었다",
        ]);
      }
      await tachyon.say_and_wait("그렇다면 꿈을 조금 더 멀리 두는 건 어떤가?");
      era.println();
      await era.printAndWait("더 멀리……?");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 곧바로 ",
        tachyon.get_colored_name(),
        "의 의도를 이해하지 못했다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "꿈을 우선하게, ",
        callname,
        ". 자네의 꿈, 나의 꿈. 더 큰 꿈을 적어 보게!",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 두 눈이 빛나며 열기로 가득 찼다",
      ]);
      era.println();
      await era.printAndWait([
        "더 큰 꿈……",
        you.get_colored_name(),
        "은(는) 잠시 생각하더니 종이를 한 장 더 꺼내 그 위에……",
      ]);
      era.printButton("무패(모든 능력치+5)", 1, { disabled: !hope_sta_win });
      era.printButton("무한(스킬 Pt+20)", 2);
      era.printButton("무사(스태미나+20)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            "무패. 광속을 뛰어넘는 입자가 범인에게 질 리 없다",
          );
          era.println();
          await tachyon.say_and_wait(
            "호오? 한 해 동안 무패라는 뜻인가? 쿠후후, 좋네. 기대할 만한 목표로군",
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 흥미롭게 ",
            you.get_colored_name(),
            "의 목표를 보았다. 그러고는 찬물을 끼얹었다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "다만…… 출전할지 말지는 내 기분에 달렸다네",
          );
          era.println();
          await era.printAndWait([
            "출전하지 않으면 무패라는 말이지——",
            tachyon.get_colored_name(),
            "은(는) 크게 웃으며 ",
            you.get_colored_name(),
            "에게는 전혀 재미없는 농담을 던졌다",
          ]);
          await era.printAndWait([
            "이런 짓……",
            tachyon.get_colored_name(),
            "이라면 정말로 할지도 모른다……",
          ]);
          await era.printAndWait([
            "새해 첫날부터 ",
            you.get_colored_name(),
            "은(는) 담당 ",
            tachyon.uma_sex_title,
            " 때문에 속이 쓰리기 시작했다. 올해도 편한 한 해는 아닐 것 같다",
          ]);
          break;
        case 2:
          await era.printAndWait([
            "무한. 꿈이라면……",
            tachyon.get_colored_name(),
            "의 꿈보다 목표로 삼기에 알맞은 것은 없다",
          ]);
          await era.printAndWait("한계를 넘어 제약을 없앤다. 그러니 무한");
          era.println();
          if (relation <= 0) {
            await tachyon.say_and_wait(
              "……쿠후후, 자네 같은 사람이 그런 생각을 하나? 어린 처자를 꼬드길 법한 말은 집어치우게. 자네는 나를 보조하는 도구일세. 제 분수를 알게나",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 가차 없이 ",
              you.get_colored_name(),
              "을(를) 비웃었다",
            ]);
            await era.printAndWait([
              "……확실히 믿음을 줄 만한 행동을 하지는 못했다. 하지만 ",
              you.get_colored_name(),
              "은(는) 진심으로 그렇게 생각한다",
            ]);
            era.println();
            await era.printAndWait([
              "쓴웃음을 지으며 ",
              you.get_colored_name(),
              "은(는) 올해도 십중팔구 편하지는 않으리라는 걸 깨달았다",
            ]);
          } else if (relation <= 225) {
            await tachyon.say_and_wait(
              "호오? 무한한 가능성인가? 좋네. 우리에게 어울리는 선택이군. 새해에는 그 목표를 향해 나아가도록 하지",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 만족스러워 보였다. 다행이다!",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "그러니 가능성에 도달하기 위해 오늘의 약은……",
            );
            era.println();
            await era.printAndWait("갑자기 본론으로!?");
            await era.printAndWait([
              "방금 호언장담한 탓에 거절할 수 없어진 ",
              you.get_colored_name(),
              "은(는) 약을 단숨에 들이켰다",
            ]);
            await era.printAndWait([
              "머리 위에 빛의 고리를 띄운 채 ",
              you.get_colored_name(),
              "은(는) 올해도 편치 않으리라 예감했다",
            ]);
          } else {
            await tachyon.say_and_wait([
              "흐흥! 당연하지, ",
              callname,
              ". 자네라면 그렇게 선택할 테니까!",
            ]);
            await tachyon.say_and_wait(
              "우리의 꿈, 우리가 추구하는 가능성. 더 넓은 미래를 위해 한계를 부수고 무한에 도달하는 것!",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 열기에 들뜬 눈으로 ",
              you.get_colored_name(),
              "을(를) 바라보았다. 그 광기 어린 빛이 ",
              you.get_colored_name(),
              "을(를) 매료시켰다",
            ]);
            await era.printAndWait("그래, 우리의 꿈을 위해……");
            era.println();
            await tachyon.say_and_wait(
              "그러니 오늘 설 음식도 잘 부탁하네",
            );
            era.println();
            await era.printAndWait(
              "잠깐, 설 음식까지 직접 만들어야 한다는 말은 못 들었는데!?",
            );
            await era.printAndWait([
              tachyon.sex,
              "의 기대 어린 시선 아래 ",
              you.get_colored_name(),
              "은(는) 체념하고 뒤집개를 집어 들었다",
            ]);
            await era.printAndWait("올해도 편한 한 해는 아닐 것 같다……");
          }
          break;
        case 3:
          await era.printAndWait(
            "무사. 레이스는 아무래도 좋다. 가능성도 할 수 있는 만큼 추구하면 충분하다. 가장 중요한 것은 아프지 않고 건강한 것. 더 오래 함께할 미래를 위해",
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('…………');

            era.printButton("「타키온?」", 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 갑자기 입을 다물었다. ",
              you.get_colored_name(),
              "은(는) 고개를 갸웃하며 물었다",
            ]);
            era.println();
            await tachyon.say_and_wait("……시시한 대답이군");
            await tachyon.say_and_wait([
              "상처 하나 없이 어떻게 역사를 만들겠나? 희생 없이는 창조도 없는 법일세. 무사라니……",
              callname,
              ", 자네의 대답이 이렇게나 시시할 줄은 몰랐군",
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 갑자기 기분이 나빠졌다. 내가 무슨 말실수라도 했나?",
            ]);
            era.println();
            await tachyon.say_and_wait("무사…… 가능하다면…… 만약……");
            era.println();
            await era.printAndWait([
              "하지만 ",
              you.get_colored_name(),
              "은(는) 곧 알아차렸다. ",
              tachyon.sex,
              "의 분노는 ",
              you.get_colored_name(),
              "을(를) 향한 게 아니었다. 뭔가 다른…… 모르겠다. 애초에 ",
              you.get_colored_name(),
              "은(는) ",
              tachyon.sex,
              "이(가) 화를 내는 이유조차 파악하지 못했다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "……마음대로 하게. 그런 시시한 소원, 그런 시시한……",
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              "은(는) 화를 내며 트레이너실을 나갔다. 어안이 벙벙한 ",
              you.get_colored_name(),
              "만이 남았다",
            ]);
          } else {
            await tachyon.say_and_wait("…………그래, 그렇군");
            era.printButton("「타키온?」", 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "의 상태가 이상하다. ",
              you.get_colored_name(),
              "은(는) 저도 모르게 물었다",
            ]);
            era.println();
            await tachyon.say_and_wait([
              "아아, 아무것도 아니네. 그래, 트레이너의 입장이라면 ",
              tachyon.uma_sex_title,
              "의 건강이 최우선이겠지. 다만…… 조금 시시하군",
            ]);
            era.println();
            await era.printAndWait([
              "시시하다라…… 가능성을 좇는 ",
              tachyon.get_colored_name(),
              "이라면 그렇게 생각할 만도 하다. 하지만 내게 가장 중요한 것은 ",
              tachyon.get_colored_name(),
              "의 건강이다",
            ]);
            await era.printAndWait([
              "어째서인지 ",
              tachyon.get_colored_name(),
              "은(는) 조금 슬퍼 보였다. 평정을 가장하고 있지만 어쩔 수 없는 슬픔이 배어났다. 이런 말을 하지 말았어야 했나……",
            ]);
            await era.printAndWait("이런 말을 하지 말았어야 했나……");
            era.println();
            await tachyon.say_and_wait(
              "…………아무것도 아니네. 쿠후후. 그럼 자네의 소망을 위해 오늘은 돌아가서 쉬도록 하지……",
            );
            await tachyon.say_and_wait("무사……란 말이지……");
            era.println();
            await era.printAndWait([
              "그 제안은 ",
              you.get_colored_name(),
              "이(가) 바라는 바다. 하지만 ",
              tachyon.get_colored_name(),
              "은(는) 도대체 왜 저러는 걸까",
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) ",
              tachyon.sex,
              "을(를) 배웅했지만 머릿속은 여전히 개운치 않았다",
            ]);
          }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = "중간 보고서 제출";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {PrintedSpan} hope_sta ホープフルステークス（着色名）
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      hope_sta,
      hoch_sho,
      sats_sho,
    ) => {
      await era.printAndWait(
        "새해가 지나도 2월의 트레센 학원은 여전히 한겨울이다",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 운동장을 바라보며 몇 번이고 하얀 입김을 내뿜었다",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "저 사람, 오늘도 저기 서 있네",
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        "쉿…… 목소리 낮춰. 누구 트레이너라던데",
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        "어…… 정말? 벌써 사흘째 서 있는데 담당 ",
        tachyon.uma_sex_title,
        "은(는) 보이지도 않잖아",
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        "글쎄…… 다른 학년에 존재감이 너무 없어서 눈에 안 띄는 ",
        tachyon.uma_sex_title,
        "이(가) 있다던데. 어쩌면 그쪽 담당일지도",
      ]);
      era.println();
      await era.printAndWait([
        "아하하…… 존재하지도 않는 ",
        tachyon.uma_sex_title,
        " 취급을 받고 있잖아, ",
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '？',
      ]);
      await era.printAndWait([
        "그렇다고 내가 먼저 담당이 ",
        tachyon.get_colored_name(),
        "이라고 밝혀 봐야 믿어 주지도 않겠지",
      ]);
      await era.printAndWait([
        "슬픈 이야기지만, 빛도 나지 않는 평범한 사람이 ",
        tachyon.get_colored_name(),
        "의 트레이너라면 누가 믿겠는가",
      ]);
      await era.printAndWait([
        "최근 며칠 동안 ",
        tachyon.get_colored_name(),
        "의 약을 먹지 않은 탓에 벌써 며칠째 빛이 나지 않고 있다",
      ]);
      era.println();
      await era.printAndWait([
        "오늘로 ",
        tachyon.get_colored_name(),
        "이(가) 트레이닝에 나오지 않은 지 사흘째다",
      ]);
      await era.printAndWait([
        "그뿐만 아니라 ",
        you.get_colored_name(),
        "은(는) 사흘 동안 담당 ",
        tachyon.uma_sex_title,
        "의 얼굴조차 보지 못했다",
      ]);
      await era.printAndWait([
        "약을 시험할 일조차 없었던 사흘. ",
        you.get_colored_name(),
        "은(는) 운동장에서 트레이닝 시간에 올 그 사람을 하염없이 기다렸다",
      ]);
      era.println();
      await you.say_and_wait("오늘도 안 오는구나……", true);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 그렇게 생각한 순간",
      ]);
      if (relation <= 225) {
        await tachyon.say_and_wait([
          "호오, ",
          callname,
          "? 왜 여기에 있나? 한참 찾았네",
        ]);
        await you.say_and_wait('……');
        await era.printAndWait([
          "아무 일도 없었다는 듯 느긋하게 나타난 ",
          tachyon.get_colored_name(),
          "을(를) 보며, 지금의 ",
          you.get_colored_name(),
          "에게는 화낼 기운조차 남아 있지 않았다",
        ]);
        await era.printAndWait(
          "일단 운동장으로…… 뭐, 됐다. 어차피 또 약이겠지……",
        );
        era.println();
        await tachyon.say_and_wait("아무튼 측정을 도와주게");
      } else {
        await tachyon.say_and_wait([
          callname,
          "! 요 며칠 어디에 있었나! 며칠째 도시락도 못 먹었단 말일세!!!",
        ]);
        await era.printAndWait([
          "잘못한 쪽이 먼저 화를 내다니. 요 며칠 연구실 문을 잠가 놓은 건 ",
          tachyon.sex,
          " 본인이 아닌가",
        ]);
        await tachyon.say_and_wait(
          "뭐, 됐네. 그건 본론이 아니니. 어서 측정하게. 새로운 실험 데이터일세",
        );
      }
      era.println();
      await era.printAndWait("응? 잠깐, 설마");
      await era.printAndWait([
        "눈앞의 상황이 믿기지 않는 ",
        you.get_colored_name(),
        "은(는) 얼떨결에 타이머를 누르고, 멍하니 ",
        tachyon.get_colored_name(),
        "이(가) 한 바퀴 돌아오는 걸 지켜보다가 다시 멍하니 멈췄다",
      ]);
      era.println();
      await tachyon.say_and_wait("기록은?");
      era.printButton("「저…… 전 기록보다 삼 초 빨라」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 흥분했다. 며칠 동안 트레이닝에 안 나왔다고? 그런 사소한 일은 이제 아무래도 좋다. 이 속도를 가진 ",
        tachyon.sex,
        "이라면 분명히, 반드시……",
      ]);
      era.println();
      await era.printAndWait([
        "좋아, 하고 ",
        tachyon.get_colored_name(),
        "은(는) 만족스럽게 손뼉을 쳤다",
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ", 그럼 좋은 소식일세"]);
      await tachyon.say_and_wait([hoch_sho, "에 출전하겠네"]);
      era.println();
      await era.printAndWait([hoch_sho]);
      era.println();
      await era.printAndWait([
        sats_sho,
        "의 전초전이다. ",
        sats_sho,
        "을(를) 목표로 하는 ",
        tachyon.uma_sex_title,
        "들 상당수는 우선 ",
        hoch_sho,
        "이나 ",
        hope_sta,
        "을(를) 목표로 삼아 인기를 얻은 뒤 ",
        sats_sho,
        "에 도전한다",
      ]);
      await era.printAndWait([
        "하지만……",
        hoch_sho,
        "은(는) 어디까지나 G2다. 인기는 걱정할 필요 없는 ",
        tachyon.get_colored_name(),
        "이(가) 이 레이스에 관심을 갖는 이유는……?",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "……몇 가지, ",
        sats_sho,
        " 전에 확인해야 할 것이 있네",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "의 말투에 ",
        you.get_colored_name(),
        "은(는) 조금 불안해졌다",
      ]);
      await era.printAndWait("하지만");
      era.printButton("「타키온이라면 괜찮아」", 1);
      await era.input();
      await tachyon.say_and_wait("흥, G2조차 따내지 못할 것 같나?");
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 쓴웃음을 지으며 그런 뜻이 아니라고 해명했다",
      ]);
      await era.printAndWait([
        "아무튼 당장의 목표는 ",
        hoch_sho,
        "으로 정해졌다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = "실험 대조군";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} vs_coffee 対戦相手にマンハッタンカフェがいる
     */
    const f = async (tachyon, you, callname, t_call_c, vs_coffee) => {
      await tachyon.say_and_wait(
        "각오는 했지만…… 역시 특기할 만한 실험 대조군은 없군",
      );
      era.println();
      await era.printAndWait(["하지만 이 레이스는 사츠키상의 전초전이다"]);
      await era.printAndWait([
        "사츠키상을 노린다면 상대가 강하든 약하든 이 결과를 놓칠 수 없다",
      ]);
      era.println();
      if (vs_coffee) {
        await tachyon.say_and_wait([
          "그러고 보니 오늘은 ",
          t_call_c,
          "도 출전하는군",
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          "……만족스러운 달리기를 보여 주면 좋겠는데. 아무래도……",
        ]);
      } else {
        await tachyon.say_and_wait([
          t_call_c,
          "이(가) 나왔다면…… 실험 가치는 더 높았을 텐데 말이지",
        ]);
      }
      await tachyon.say_and_wait([
        "그런데 ",
        callname,
        ", 자네는 ",
        t_call_c,
        "을(를) 어떻게 보고 있나?",
      ]);
      era.println();
      await era.printAndWait("어?");
      await era.printAndWait([
        "갑작스러운 질문에 ",
        you.get_colored_name(),
        "은(는) 생각에 잠겼다",
      ]);
      await era.printAndWait("회색 뇌세포가 움직이기 시작했다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "이(가) 그런 질문을 하는 의도는……",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 긴장하는 걸 보고 ",
        tachyon.get_colored_name(),
        "은(는) 웃었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "그렇게 긴장하지 말게. 그저 질문일 뿐이야. 개인적으로는 자네가 ",
        tachyon.sex,
        "과(와) 좋은 관계를 맺어 주면 기쁘겠군…… 만일을 위해서",
      ]);
      era.printButton("「불안해지는 말투네……」", 1);
      era.printButton("「난 언제까지나 타키온의 트레이너야!」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "상상이 어디까지 가는 건가…… 됐네. 출전하러 가겠어",
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 호프풀 전에 보았던 스프레이를 다리에 뿌리고 출전을 준비했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = "대조 결과 분석";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     */
    const f = async (tachyon, you, callname, love, hoch_sho, sats_sho) => {
      await era.printAndWait([
        "당연하다는 듯 ",
        tachyon.get_colored_name(),
        "은(는) ",
        hoch_sho,
        "을(를) 제패했다",
      ]);
      era.printButton("「굉장한 레이스였어!」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "후우…… 후우…… 쿠후후, 자네는 매번 반응이 과하군. 진심으로 달린 것도 아닌데 뭐가 굉장하다는 건가",
      );
      era.println();
      await era.printAndWait([tachyon.sex, "은(는) 재미있다는 듯 말했다"]);
      era.println();
      await you.say_and_wait("과하지 않아");
      await you.say_and_wait(
        "진심이든 아니든 타키온의 달리기는 똑같이 사람을 사로잡아. 예를 들면…… 그래, 광전자야",
      );
      era.println();
      await tachyon.say_and_wait("광전자……?");
      era.println();
      await you.say_and_wait(
        "전극에 닿는 빛은 세기와 상관없이 전자를 튀어나오게 해. 진동수, 그러니까 격의 차이지",
      );
      await you.say_and_wait(
        "세기도 진심인지도 상관없어. 타키온의 달리기는 내게 차원이 다른, 전극에서 전자를 끌어낼 수 있는 유일한 빛이야",
      );
      era.println();
      await tachyon.say_and_wait("……그게 무슨 비유인가");
      era.println();
      await you.say_and_wait("어…… 별로야?");
      await you.say_and_wait(
        "시간 들여 생각한 건데, 꽤 자신 있었거든……",
      );
      era.println();
      if (love > 75) {
        await tachyon.say_and_wait(
          "뭐…… 무슨 말인지는 알겠네. 그러니까 나만 벗길 수 있는 정조대를 차고 있다는 건가?",
        );
        await era.printAndWait("아니, 그 비유가 더 심하잖아……");
      } else {
        await tachyon.say_and_wait(
          "뭐…… 무슨 말인지는 알겠네. 어떻게 달리든 나라면 만족시켜 줄 수 있다는 뜻이군?",
        );
      }
      await you.say_and_wait("그래도 진심으로 달려 줬으면 해");
      await era.printAndWait([
        "그때 ",
        you.get_colored_name(),
        "은(는) ",
        tachyon.get_colored_name(),
        "이(가) 레이스 전에 말했던 시험을 떠올렸다……",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "……문제없네. 적어도 ",
        sats_sho,
        "까지는 문제없어",
      ]);
      era.println();
      await era.printAndWait("적어도……라");
      await era.printAndWait([
        "안심할 수 없는 말에 ",
        you.get_colored_name(),
        "도 입을 다물었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……그 이야기는 됐네. 어서 돌아가 실험을 계속하지",
      );
      era.println();
      await era.printAndWait([
        "이렇게 ",
        you.get_colored_name(),
        "과(와) ",
        tachyon.get_colored_name(),
        "의 ",
        hoch_sho,
        "은(는) 끝났다",
      ]);
      await era.printAndWait(["다음 목표인 ", sats_sho, "은(는) 벌써 코앞이다!"]);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = "단일 항목 실험과 결과 분석";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait("오늘은 클래식 첫 경주, 사츠키상이다");
      await era.printAndWait(
        "관객들은 개막을 손꼽아 기다리고, 출전자들도 레이스 전부터 들떠 있다",
      );
      await era.printAndWait([
        "그렇다. ",
        tachyon.get_colored_name(),
        "도 예외는 아니다",
      ]);
      await era.printAndWait([
        "다만……",
        tachyon.sex,
        "이(가) 들뜬 이유는 다른 이들과 조금 다르다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        "! 보게나. 역시…… G1 무대야말로 데이터를 수집할 가치가 있군!",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 흥분해서 이리저리 돌아다니며, 다른 출전자의 대기실에 숨어들어 개체 데이터를 모으려 들기까지 했다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 필사적으로 말리고서야 그 생각을 접게 할 수 있었다",
      ]);
      await era.printAndWait([
        "레이스 전부터 들뜬 ",
        tachyon.get_colored_name(),
        "과(와) 달리 ",
        you.get_colored_name(),
        "은(는) 어째서인지 마음이 놓이지 않았다",
      ]);
      era.println();
      await era.printAndWait([
        "야요이상 때 「적어도 사츠키상까지는 문제없다」고 했다",
      ]);
      await era.printAndWait(["하지만…… 사츠키상 다음은 모른다는 건가?"]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 몸에…… 무슨 문제가 있는 걸까",
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        "? 무슨 일인가? 오늘은 평소의 자네답지 않군",
      ]);
      await era.printAndWait([
        "오히려 ",
        tachyon.get_colored_name(),
        "에게 걱정을 끼치다니. 이건 안 된다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 황급히 마음을 다잡고 평소 표정을 되찾았다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "뭐, 됐네. 오늘은…… 진심으로 달리는 모습을 보여 주지. 진정한 ",
        tachyon.uma_sex_title,
        "의 한계를",
      ]);
      era.println();
      await era.printAndWait("한계……?");
      await era.printAndWait("아니, 괜찮다. 분명히");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 의문과 불안을 접어 두고 ",
        tachyon.get_colored_name(),
        "이(가) 코스로 올라가는 모습을 배웅했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = (tachyon) => [tachyon.uma_sex_title, "의 한계"];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (tachyon, you, callname, sats_sho, toky_yus) => {
      await tachyon.say_and_wait([callname, ", 보았나?"]);
      era.println();
      await era.printAndWait([
        sats_sho,
        "을(를) 달리고 온 ",
        tachyon.get_colored_name(),
        "은(는) 지금껏 가장 뜨거운 환호를 받았다",
      ]);
      await era.printAndWait([
        "관객들이 열광하는 이유는 ",
        you.get_colored_name(),
        "도 안다",
      ]);
      await era.printAndWait([
        "오늘의 ",
        tachyon.get_colored_name(),
        "은(는) 완벽하다고 해도 좋았다",
      ]);
      await era.printAndWait([
        "아니, ",
        tachyon.uma_sex_title,
        "에게 한계가 있다면 그것이 바로 오늘의 ",
        tachyon.get_colored_name(),
        "일 것이다",
      ]);
      await era.printAndWait(
        "빛 같은 속도, 빛 같은 눈부심, 빛 같은…… 덧없음",
      );
      era.println();
      await era.printAndWait("끝나면 빛처럼 흩어져 버릴 것만 같은 달리기");
      await era.printAndWait([
        "결승선을 통과한 순간 누구도 소리를 낼 수 없었다. ",
        tachyon.get_colored_name(),
        "의 실력을 계속 믿어 온 나조차 온전히 믿기지 않았다",
      ]);
      await era.printAndWait([
        "그 달리기는 ",
        tachyon.uma_sex_title,
        "이라는 생물의 한계라고밖에 설명할 수 없다",
      ]);
      await era.printAndWait(
        "보는 순간 「아아, 이 달리기를 뛰어넘을 자는 없겠구나」 하고 깨닫게 되는 달리기였다",
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        "……이것일세. 우리가 넘어야 할 한계",
      ]);
      era.println();
      await era.printAndWait("스스로를 한계라고 정의한다");
      await era.printAndWait("얼마나 오만한가");
      await era.printAndWait(
        "하지만 조금 전 레이스를 보았다면 누구라도 그 오만함에 고개를 끄덕일 수밖에 없다",
      );
      era.println();
      await tachyon.say_and_wait(
        "……그래. 그 속도를 넘어야 한계를 초월했다고 할 수 있네. 그렇지 않으면 모두 공론에 불과하지",
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 그렇게 말하고 당신의 눈을 똑바로 바라보며 대답을 기다렸다",
      ]);
      await era.printAndWait([
        "그 말에 담긴 뜻은 ",
        you.get_colored_name(),
        "도 알 것이다",
      ]);
      await era.printAndWait("나에게는 그 속도를 넘어설 자신이 있는가");
      era.printButton("「반드시 할 수 있어」", 1);
      era.printButton("「타키온이니까 반드시 할 수 있어」", 2);
      await era.input();
      await era.printAndWait("거의 한순간이었다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 뜻을 알아차리자마자 ",
        you.get_colored_name(),
        "은(는) 대답했다",
      ]);
      await era.printAndWait("생각할 것도 없다. 망설일 것도 없다");
      await era.printAndWait([
        "눈앞의 ",
        tachyon.uma_sex_title,
        "은(는) 한계를 뛰어넘을 힘을 지니고 있다",
      ]);
      await era.printAndWait("처음 만났을 때부터 그렇게 확신했다");
      await era.printAndWait([
        "지금은 그저 ",
        you.get_colored_name(),
        "과(와) ",
        tachyon.sex,
        "의 목표가 눈앞에 있을 뿐이다",
      ]);
      await era.printAndWait("목표가 보인다면 넘어 보이겠다");
      era.println();
      await tachyon.say_and_wait(
        "그 반응 속도…… 사고가 아니라, 본능인가? 자네는……",
      );
      era.println();
      await era.printAndWait([
        "어째서인지 ",
        tachyon.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "을(를) 보며 미묘한 표정을 지었다",
      ]);
      await era.printAndWait([
        "잠시 뒤 ",
        tachyon.sex,
        "은(는) 무언가 결심한 듯 말했다",
      ]);
      era.println();
      await tachyon.say_and_wait(["그럼 도전해 보도록 하지, ", callname, '……']);
      await tachyon.say_and_wait("다만 우선 다음 레이스부터 확인하겠네……");
      await tachyon.say_and_wait([
        "지금으로서는 ",
        toky_yus,
        "에는 출전할 수 있네. 그렇게 준비해 주게, ",
        callname,
      ]);
      era.println();
      await era.printAndWait("……또다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "에 관해 ",
        you.get_colored_name(),
        "이(가) 불안해하는 점이 있다면 오직 이것뿐이다",
      ]);
      await era.printAndWait("……다음이 마지막인 것처럼 말하는 불확실한 태도");
      await era.printAndWait([
        "하지만 ",
        tachyon.get_colored_name(),
        "이라면 그 불확실함까지 넘어 보일 것이다",
      ]);
      await era.printAndWait([you.get_colored_name(), "은(는) 그렇게 낙관했다"]);
      era.println();
      await era.printAndWait(["다음 레이스는 ", toky_yus, "으로 정해졌다!"]);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = "실험 결과가 뒷받침되지 않다";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} t_call_p アグネスタキオンがダンツフレームを呼ぶ名
     */
    const f = async (tachyon, you, callname, t_call_p) => {
      await tachyon.say_and_wait([
        "이런, 이런. 역시 일본 더비로군……",
        t_call_p,
        "도 출전하겠지. 기대되는군, ",
        tachyon.sex,
        "의 가능성이……",
      ]);
      era.println();
      await era.printAndWait([
        "일본 더비는 가장 운이 좋은 ",
        tachyon.uma_sex_title,
        "이(가) 이기는 레이스라고 한다",
      ]);
      await era.printAndWait([
        "가장 빠른 ",
        tachyon.uma_sex_title,
        "이(가) 사츠키상을, 가장 운이 좋은 ",
        tachyon.uma_sex_title,
        "이(가) 더비를, 가장 강한 ",
        tachyon.uma_sex_title,
        "이(가) 국화상을 차지한다",
      ]);
      await era.printAndWait([
        "가장 빠르다거나 강하다는 명확한 이야기보다는…… 운이라는 모호함 때문에 ",
        you.get_colored_name(),
        "은(는) 레이스 전부터 ",
        tachyon.sex,
        "이(가) 걱정되었다",
      ]);
      era.printButton("「정말 괜찮겠어?」", 1);
      era.printButton("「역시 신사에서 뽑은 대길 운세를 가져갈래……?」", 2);
      await era.input();
      await era.printAndWait([
        "오늘 이른 아침 ",
        tachyon.get_colored_name(),
        "을(를) 위해 백 계단이나 되는 돌계단을 올라 신사에서 뽑아 온 운세다",
      ]);
      await era.printAndWait([
        "어째서인지 ",
        you.get_colored_name(),
        "의 행동을 들은 ",
        tachyon.get_colored_name(),
        "은(는) 묘한 표정을 지었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "……아침부터 그런 걸 뽑으러 가다니……",
        callname,
        "이(가) 그렇게 미신을 믿는 사람일 줄은 몰랐군",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 말에 ",
        you.get_colored_name(),
        "은(는) 고개를 저었다",
      ]);
      era.printButton(
        "「신에게 빌든 뭘 하든 상관없어. 타키온이 빨리 달릴 수만 있다면 뭐든 할 거야!」",
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        "……쿠후후, 그런 미신은 자네가 갖고 있게. 하지만 그 마음은…… 받아 두지. 오늘 실험은 좋은 결과가 나올 것 같군",
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = "실험 목적 조정";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} t_call_p アグネスタキオンがダンツフレームを呼ぶ名
     */
    const f = async (tachyon, you, t_call_c, t_call_p) => {
      era.printButton("「타키온! 멋졌어!」", 1);
      await era.input();
      await tachyon.say_and_wait("음……");
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 평소처럼 ",
        tachyon.get_colored_name(),
        "의 달리기를 칭찬하려 했다. 하지만",
      ]);
      era.println();
      await tachyon.say_and_wait("……실험은 성공하지 못했네");
      era.println();
      await era.printAndWait("응?");
      await era.printAndWait("그토록 훌륭하게 달렸는데 실험은 실패라고?");
      era.println();
      await tachyon.say_and_wait([
        t_call_p,
        "……기대는 했지만 ",
        tachyon.sex,
        "의 가능성은 내가 찾는 것과는 맞지 않아…… 역시 ",
        t_call_c,
        '……',
      ]);
      era.println();
      await era.printAndWait([
        "왠지 모르게, ",
        tachyon.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "으로서는 이해하기 힘든 말을 중얼거렸다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……아무튼 지금은 됐네. 이제부터 실험의 핵심에 들어갈 테니",
      );
      era.println();
      await era.printAndWait([
        "잘 모르겠지만 ",
        you.get_colored_name(),
        "은(는) ",
        tachyon.get_colored_name(),
        "의 엄숙한 얼굴을 보고 저도 모르게 자세를 바로잡았다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "다음 레이스는…… 당분간…… 정할 수 없겠네…… 생각해야 할 것이 있어서",
      );
      era.println();
      await era.printAndWait([
        "불확실한 말에 ",
        you.get_colored_name(),
        "의 레이스 뒤 기쁨은 순식간에 불안으로 변했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_23: (() => {
    const title = "최속? 최강?";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await tachyon.print_and_wait("더 빠르게");
      await tachyon.print_and_wait("아직, 더 빠르게");
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "은(는) 밤의 운동장을 달리고 있다",
      ]);
      await tachyon.print_and_wait(
        "뒤돌아보지 않고 한계를 추구한다. 속도의 한계, 가능성의 한계를",
      );
      await tachyon.print_and_wait(
        "마치 광속을 뛰어넘는 입자(Tachyon)처럼",
      );
      await tachyon.print_and_wait("하지만……");
      era.println();
      await tachyon.say_and_wait("쳇…… 역시 안 되는군……");
      era.println();
      await tachyon.print_and_wait("모든 것에는 대가가 있다");
      await tachyon.print_and_wait([
        "과거에 ",
        tachyon.uma_sex_title,
        "의 한계를 깨뜨린 자는 목숨을 대가로 치렀다고 한다",
      ]);
      await tachyon.print_and_wait(
        "그 대가로 정말 한계를 깰 수 있다면 차라리 낫다",
      );
      await tachyon.print_and_wait([
        "하지만 ",
        tachyon.get_colored_name(),
        "의 두 다리에는 그럴 자격조차 허락되지 않았다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "아무리 해도 한계를 깨뜨릴 수 없다…… 평범함에 만족할 것인가, 아니면……",
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "은(는) 발걸음을 멈췄다",
      ]);
      era.println();
      await tachyon.say_and_wait("……내 한계는 여기인가?");
      era.println();
      await tachyon.print_and_wait([
        tachyon.uma_sex_title,
        "의 한계가 아니다. ",
        tachyon.get_colored_name(),
        "의 한계다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "…………그럼 이 길이 막혔다면…… Plan B를 선택해야 하는 건가",
      );
      era.println();
      await tachyon.print_and_wait(
        "「최속」의 한계를 버리고 「최강」의 한계를 선택한다",
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "은(는) 실패해도 좋다. 실패한 뒤 ",
        tachyon.sex,
        "을(를) 대신할 수 있는 자가 있으면 된다",
      ]);
      await tachyon.print_and_wait("꿈을 남에게 맡기는 것. 자기 도피에 가까운 선택이다");
      await tachyon.print_and_wait(
        "원래라면 이것이 가장 이성적이라고 스스로를 설득할 수 있었을지도 모른다. 가능성을 더 잘 실현할 수 있는 자에게 맡기는 것이라고",
      );
      await tachyon.print_and_wait("하지만……");
      era.println();
      await you.used_to_say_and_wait("타키온을 믿어");
      await you.used_to_say_and_wait("타키온이라면 반드시 괜찮을 거야");
      await you.used_to_say_and_wait([
        "3관은 물론이고 ",
        tachyon.uma_sex_title,
        "의 가능성을 뛰어넘는 것도 문제없어……!",
      ]);
      era.println();
      await tachyon.print_and_wait("그 사람의 나에 대한 신뢰");
      await tachyon.print_and_wait([
        you.sex,
        "을(를) 배신하는 것이나 다름없는 이 행동…… 정말 괜찮을까",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "……아니, 배신이 아니야. ",
        you.sex,
        "에게 더 좋은 선택을 주는 것뿐…… 그러니까……",
      ]);
      era.println();
      await tachyon.print_and_wait("망설임");
      await tachyon.print_and_wait("두려움");
      await tachyon.print_and_wait("당혹감");
      await tachyon.print_and_wait("대체…… 어떻게 해야 하지");
      era.println();
      await tachyon.say_and_wait("……그러면 되겠군");
      era.println();
      await tachyon.print_and_wait("다음 달의 월계배");
      await tachyon.print_and_wait(
        "학생회장이 여는, 학년도 본격화의 진행 정도도 따지지 않는 레이스",
      );
      await tachyon.print_and_wait(
        "……출전한다면 더비 이후 지금까지의 짧은 휴식으로는……",
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "의 두 다리가 분명 버티지 못할 것이다",
      ]);
      await tachyon.print_and_wait(
        "하지만 이번 데이터 수집 기회를 놓치면 다시 기회가 올까",
      );
      await tachyon.print_and_wait([
        "아니, 애초에……",
        tachyon.get_colored_name(),
        "에게 「앞으로」가 있을까",
      ]);
      await tachyon.print_and_wait("차라리…… 이번 레이스에서 전력을……?");
      era.println();
      await tachyon.print_and_wait("달빛 아래의 빛의 입자는 여전히 망설이고 있다");
    };
    f.title = title;
    return f;
  })(),
  ws_a_or_b: (() => {
    const title = 'A or B';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} daiwa ダイワスカーレット
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, daiwa, coffee, you, callname, t_call_c) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "타키온 선배가 월계배에 나온다는 거, 정말이야!?",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        "기대돼…… 타키온 선배의 달리기는 정말 넋을 놓고 보게 돼……",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        "꼭, 꼭 보러 갈 거야!",
      );
      era.println();
      await era.printAndWait("지금 학원에서 가장 큰 화제는 월계배다");
      await era.printAndWait("학생회장이 주최하며 URA 결승을 염두에 둔 레이스——월계배");
      await era.printAndWait(
        "학년도 본격화의 시작과 끝도 따지지 않고, 의지만 있다면 누구든 나갈 수 있다",
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        "도 이 데이터 수집의 좋은 기회를 놓칠 리 없다",
      ]);
      await era.printAndWait([
        "최근 몇 주는 트레이닝에 온 힘을 쏟고 있다. ",
        tachyon.sex,
        "의 말로는, 자신부터 그에 걸맞은 수준에 올라야 상대의 가능성을 끌어낼 수 있다고 한다",
      ]);
      era.println();
      await era.printAndWait([
        "오늘도 ",
        tachyon.sex,
        "은(는) 운동장에서 스스로를 단련하고 있다",
      ]);
      era.printButton(
        "「타키온! 오늘 성과도 전 기록을 훨씬 뛰어넘었어!」",
        1,
      );
      era.printButton("「대단해, 타키온!」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "……하하하! 자네의 과장된 말투에는 익숙해졌지만, 들을 때마다 나도 모르게 놀라게 되는군……",
      );
      await tachyon.say_and_wait(
        "정말…… 진지하게 묻겠네. 부끄러움이라는 게 없나?",
      );
      era.printButton("「진심으로 하는 말이야!」", 1);
      era.printButton("「타키온을 돕기 위해서라면 목숨도 아깝지 않아!」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "과하군…… 그런 달콤한 말보다 실제로 실험을 도와주는 편이 더 의미 있다네",
      );
      era.println();
      await era.printAndWait([
        "그렇게 말하며 ",
        tachyon.get_colored_name(),
        "은(는) 가운 아래에서 시험관 몇 개를 꺼냈다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그러고 보니 마침…… 오늘 아침에 영감이 떠올라 만든 약일세……",
      );
      await tachyon.say_and_wait(
        "어떤가? 지금 마시고 내가 다음 한 바퀴를 돌고 오면 효과를 보고해 주게. 그 아첨보다는……?",
      );
      era.println();
      await era.printAndWait([
        "말을 마치기도 전에 ",
        tachyon.get_colored_name(),
        "은(는) 굳어 버렸다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "의 눈앞에는 이미 약을 다 마시고 빈 시험관 세 개를 든 ",
        you.get_colored_name(),
        "이(가) 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait("자네……");
      era.printButton("「이러면 타키온도 안심할 수 있겠지?」", 1);
      era.printButton("「이러면 타키온에게 도움이 되겠지?」", 2);
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "은(는) 어째서인지 한참 동안 아무 말도 하지 못했다",
      ]);
      era.printButton("「타키온?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "……정말이지…… 어디까지 흔들어 놓아야 만족하겠나……",
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 머리를 짚고 곤란한 표정으로 무언가 말하려 했다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ", 잠깐 기다리게. 연구실로 오게나……",
        you.get_colored_name(),
        "과(와) 할 이야기가 있네",
      ]);

      era.drawLine();

      await tachyon.say_and_wait("그럼…… 이야기하지");
      era.println();
      await era.printAndWait([
        "연구실에서 ",
        you.get_colored_name(),
        "은(는) 자세를 바로잡고 ",
        tachyon.get_colored_name(),
        "의 이야기를 기다렸다",
      ]);
      era.println();
      await tachyon.say_and_wait("내 다리는…… 아마 더는 달릴 수 없게 될 걸세");
      era.println();
      await era.printAndWait("하늘이 무너지는 듯한 내용을 담담하게 말했다");
      await era.printAndWait([
        tachyon.sex,
        "은(는) ",
        you.get_colored_name(),
        "이(가) 받아들일 시간을 주고, 잠시 뒤 말을 이었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "각오는 진작 했네…… 내 다리는 원래 평범한 ",
        tachyon.uma_sex_title,
        "보다 약하니까. 받아들이지 못할 일은 없어",
      ]);
      await tachyon.say_and_wait(
        "하지만 그게 꿈을 버릴 이유는 되지 않지",
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 꿈……",
        tachyon.uma_sex_title,
        "의 한계를 넘어 ",
        tachyon.uma_sex_title,
        "의 가능성을 보는 것",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "내가 아니어도 좋네. 지켜보기만 해도 좋아…… 발판에 불과해도 상관없어",
      );
      await tachyon.say_and_wait([
        "누구든…… 이것이 ",
        tachyon.uma_sex_title,
        "의 한계가 아니라는 것만 증명한다면. 이것은 ",
        tachyon.get_colored_name(),
        "의 한계일 뿐이라고 증명한다면…… 그것만으로 충분하네",
      ]);
      await tachyon.say_and_wait(
        "진심일세. 이번 월계배도…… 내가 아닌 누군가가 성공할 수 있도록……",
      );
      await tachyon.say_and_wait(
        "최대한 많은 데이터를 모으고 가장 완벽한 계획을 세우려는 거야…… 온 힘을 쏟아서라도……",
      );
      await tachyon.say_and_wait(
        "하지만…… 그런 내 결심을 흔든 건…… 자네일세",
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "은(는) 복잡한 눈빛으로 ",
        you.get_colored_name(),
        "을(를) 바라보았다",
      ]);
      await era.printAndWait("슬픔?");
      await era.printAndWait("고통?");
      await era.printAndWait("희망?");
      await era.printAndWait("절망?");
      await era.printAndWait([
        "여러 감정이 뒤섞인 시선이 ",
        you.get_colored_name(),
        "을(를) 붙잡았다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "내가 포기하려 할 때마다 언제나 그런 눈으로 나를 보는 자네……",
      );
      await tachyon.say_and_wait(
        "솔직히 말하지. 포기하려는 사람에게 그 눈빛이 얼마나 얄미운지 아는가?",
      );
      await tachyon.say_and_wait("그토록 순수하고 신뢰로만 가득한 눈빛……");
      era.println();
      await era.printAndWait([
        "싫다고 말하면서도 ",
        tachyon.get_colored_name(),
        "의 복잡한 눈빛 속에는 유독 혐오만은 보이지 않았다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "그러니 ",
        callname,
        ". 나를 흔들어 놓은 자네가 책임지게…… 길을 선택할 책임을",
      ]);
      await tachyon.say_and_wait([
        "……기억하겠지? ",
        t_call_c,
        "을(를) 어떻게 보느냐고 물었던 것 말일세",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 고개를 끄덕였다. ",
        tachyon.get_colored_name(),
        "이(가) ",
        coffee.get_colored_name(),
        "에게 보이는 관심은 다른 ",
        tachyon.uma_sex_title,
        "들에게보다 분명히 컸다……",
        daiwa.get_colored_name(),
        "을(를) 제외하면",
      ]);
      await era.printAndWait("그 관심은 단순히 실험 대상에게 보이는 것이 아니었다");
      await era.printAndWait("이유는 여러 번 생각해 봤지만 어느 것도 명쾌하지 않았다");
      era.println();
      await tachyon.say_and_wait([
        "내가 계속 달릴 수 없을 때를 위한 Plan B…… 모든 것을 ",
        t_call_c,
        "에게 맡기고, ",
        t_call_c,
        "이(가) 나를 대신해 가능성의 세계를 보게 할 생각일세",
      ]);
      await tachyon.say_and_wait([
        "그 뒤 나는 모든 레이스를 거절하겠네……",
        t_call_c,
        "이(가) 성장해서 ",
        tachyon.sex,
        "이(가) 한계를 깰 때까지. 남은 모든 힘을 쏟아부어 ",
        tachyon.sex,
        "의 발판이 되겠어",
      ]);
      await tachyon.say_and_wait(
        "모든 것을 희생해 가장 성공 가능성이 높은 선택지를 실현하는 것. 그것이 연구자일세. 희생되는 게 자신이어도 마찬가지야",
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "은(는) 감정을 사고에서 배제한 선택지를 담담하게 말했다",
      ]);
      await era.printAndWait([
        "몇 번이고 연습한 듯한 말투였다…… 어쩌면 ",
        tachyon.sex,
        "은(는) 언젠가 이 이야기를 나에게 할 각오를 진작 끝냈을지도 모른다",
      ]);
      await era.printAndWait([
        "그리고 ",
        tachyon.sex,
        "의 목소리가 조금 떨렸다",
      ]);
      era.println();
      await tachyon.say_and_wait("그리고…… 두 번째. 가장 먼저 포기했던 Plan A일세");
      await tachyon.say_and_wait([
        "이대로 계속해서 ",
        callname,
        "이(가) 말한 3관을 향해, 내 목표인 한계 돌파를 향해 나아가는 거야……",
      ]);
      await tachyon.say_and_wait(
        "……동화처럼 아름답고 그만큼 덧없는 선택이지. 자네는 나와 함께해야 하네. 꿈이 이루어질 때까지, 혹은…… 모든 것이 흩어질 때까지",
      );
      era.println();
      await tachyon.say_and_wait(
        "선택하게…… 인정하지. 이건 책임 전가일세. 모든 것을 자네에게 떠넘기는 거야. 하지만……",
      );
      await tachyon.say_and_wait(
        "나에게 희망을 준 건 자네니까. 마땅히 져야 할 책임이겠지",
      );
      await tachyon.say_and_wait([
        "자, ",
        callname,
        ". 자네 차례일세. 선택하게",
      ]);
      era.println();
      era.print([you.get_colored_name(), "은(는) 결심한다……"]);
      era.printButton("Plan A를 선택한다", 1);
      era.printButton("Plan B를 선택한다", 2, {
        disabled:
          era.get('cflag:25:育成回合计时') !== era.get('cflag:32:育成回合计时'),
      });
      era.print(
        "【경고: 이 선택으로 아그네스 타키온의 트레이닝과 레이스 노선이 고정됩니다】",
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  os_95_3: (() => {
    const title = "추첨과 보상제의 효과";
    /**
     * Plan A / B 共通
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {number} dice 抽選結果。1=ティッシュ、2=ニンジン、3=大量のニンジン、4=ニンジンハンバーグ、5=温泉旅行券
     * @param {boolean} plan_b Plan B に入っているか
     * @param {number} cook_times アグネスタキオンに料理した回数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      relation,
      love,
      dice,
      plan_b,
      cook_times,
    ) => {
      await tachyon.say_and_wait("정말이지…… 그렇게 쉽게 폭발할 줄이야");
      await tachyon.say_and_wait([
        call_25,
        "도 말이지…… 커피 가루에 신체 능력을 높이는 약을 조금 넣었을 뿐인데, 왜 그렇게 화를 내는 건가……",
      ]);
      await tachyon.say_and_wait(
        "역시 이번에는 저주도 견디는 비커를 사야겠군?",
      );
      era.printButton("「그런 물건은 어디서 구해……」", 1);
      era.printButton("「애초에 수요가 없잖아……」", 2);
      await era.input();
      await tachyon.say_and_wait([
        "흥, ",
        tachyon.sex,
        "의 저주가 어떤 원리든 결국 외력으로 부수는 수밖에 없네",
      ]);
      await tachyon.say_and_wait(
        "즉, 어떤 외력을 가해도 부서지지 않을 만큼 강도를 높이면 된다는 말이지",
      );
      await tachyon.say_and_wait(
        "그러니 이번에 찾을 것은 우주용 소재로 만든, 극한의 추위와 열기, 기압도 견디는 고사양 비커일세",
      );
      await tachyon.say_and_wait([
        "아, 찾았군. ",
        callname,
        ", 보게나",
      ]);
      era.println();
      await era.printAndWait("진짜로 있네! 상점가 대단한데!");
      era.drawLine({ content: "시간을 조금만 되돌려서" });
      era.println();
      await era.printAndWait([
        "이날 ",
        you.get_colored_name(),
        "은(는) ",
        tachyon.get_colored_name(),
        "과(와) 실험 기구를 사러 거리에 나왔다",
      ]);
      await era.printAndWait("장보기를 마치고 돌아가려는데……");
      await you.say_as_passer_by_and_wait(
        "상점가 아저씨",
        "자, 자! 상점가 실험 기구 대방출!",
      );
      await you.say_as_passer_by_and_wait(
        "상점가 아저씨",
        "우주 특제 유리 비커, 우주 운석 도가니, 로켓 연료 알코올램프를 세트로 사시면 추첨에 한 번 참여하실 수 있습니다!",
      );
      await you.say_as_passer_by_and_wait(
        "상점가 아저씨",
        "특등은 온천 여행권! 일등은 초대형 당근 햄버그!",
      );
      era.println();
      await era.printAndWait(
        "어…… 처음 건 그렇다 쳐도 뒤의 것들은 정말 사는 사람이 있나……",
      );
      era.println();
      await tachyon.say_and_wait([callname, ", 추첨하러 가지"]);
      era.printButton("「전부 샀어!?」", 1);
      era.printButton(
        "「……알코올램프에 로켓 연료를 써도 정말 괜찮아?」",
        2,
      );
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          "당연하지. 연구실에 보충해야 할 것이 많으니까",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 당연하다는 듯 말했다",
        ]);
        await era.printAndWait("……이 상점가는 도대체 뭐 하는 곳이지");
      } else {
        await tachyon.say_and_wait([
          callname,
          ", 광고 문구도 모르는 건가? 당연히 홍보용 문구일세, 홍보",
        ]);
        era.println();
        await era.printAndWait(
          "……아니, 앞의 것들이 진짜면 마지막 것도 의심하는 게 당연하잖아",
        );
      }
      era.printButton(
        "「그나저나 타키온이 추첨에 관심을 갖다니 드문 일이네」",
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        "그래…… 그렇군. 추첨을 하느니 경품은 돈으로 사면 되니까…… 우리가 받은 레이스 상금이면 이 정도는 문제없지",
      );
      era.println();
      await era.printAndWait("그렇다면……");
      era.println();
      await tachyon.say_and_wait("하지만 목적은 경품이 아니야. 관찰일세");
      era.println();
      await era.printAndWait("관찰……?");
      era.println();
      await tachyon.say_and_wait(
        "새해에 한 말을 기억하나? 감정의 영향을 연구해 보고 싶다고 했지……",
      );
      await tachyon.say_and_wait(
        "그러려면 대조군이 필요하네. 가장 좋은 대조군은 줄곧 곁에 있는 자네지",
      );
      await tachyon.say_and_wait("보여 주게. 추첨 뒤에 어떤 반응을 하는지");
      era.println();
      await era.printAndWait([
        "이렇게 ",
        you.get_colored_name(),
        "은(는) 앞으로 나가 추첨기를 돌렸다……",
      ]);
      switch (dice) {
        case 1:
          await you.say_as_passer_by_and_wait("가게 주인", "참가상, 휴지 한 봉지");
          await era.printAndWait("참가상인가…… 아쉽지만 어쩔 수 없다");
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait("흠…… 별 반응이 없군");
            era.println();
            await era.printAndWait("아니…… 처음부터 기대도 안 했으니까");
            era.println();
            await tachyon.say_and_wait(
              "기대하지 않았다니, 처음부터 당첨되지 않을 거라 생각했다는 건가?…… 결과를 보기 전에 가능성을 부정하는 방식은 별로 마음에 들지 않는군",
            );
            era.println();
            await era.printAndWait("아……");
            era.println();
            await tachyon.say_and_wait("가지. 실험을 계속해야 하니");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "의 기분이 나빠졌다",
            ]);
            await era.printAndWait(["두 사람은 말없이 학원으로 돌아갔다"]);
          } else {
            await tachyon.say_and_wait(
              "참가상이군…… 뭐, 아무래도 좋네",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "도 맞장구쳤다. 고작 상점가의 작은 행사일 뿐이다",
            ]);
            era.println();
            await tachyon.say_and_wait("경품쯤이야 우리라면 살 수 있으니까");
            await tachyon.say_and_wait(
              "게다가 휴지도 쓸모 있다네…… 보게, 뭔가를 닦을 수 있지 않나?",
            );
            await tachyon.say_and_wait(
              "그리고…… 그 온천 여행권…… 당첨되어도 여행할 시간은 없을 테니까",
            );
            era.println();
            await era.printAndWait("응? 왜 갑자기 말이 그렇게 많아졌지");
            await tachyon.say_and_wait([
              "……그러고 보니 ",
              callname,
              ". 이런 추첨은 가게에 따라 속임수를 쓰기도 한다더군……",
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 추첨기까지 조사하려는 걸 보고 ",
              you.get_colored_name(),
              "은(는) 황급히 ",
              tachyon.get_colored_name(),
              "을(를) 상점가에서 데리고 나왔다",
            ]);
            await tachyon.say_and_wait([
              "큭…… 놓게, ",
              callname,
              ". 경품 따위는 아무래도 좋네. 하지만 소비자로서 공정한지 확인할 권리와 책임이 있단 말일세……!",
            ]);
            era.println();
            await era.printAndWait([
              "……실은 ",
              tachyon.sex,
              "도 말하는 것만큼 아무래도 좋지는 않은 모양이다",
            ]);
          }
          break;
        case 2:
          await you.say_as_passer_by_and_wait(
            "가게 주인",
            "삼등, 특선 당근 한 개!",
          );
          era.println();
          await era.printAndWait("특선이라니…… 재고 처리겠지");
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 하는 수 없이 당근 한 개를 받아 들었다",
          ]);
          await era.printAndWait("태클을 걸어야 할지 고민되지만, 이 추첨의 경품은");
          await era.printAndWait([
            "참가상 휴지와 특등 온천 여행권을 빼면 전부 ",
            tachyon.uma_sex_title,
            "용 아닌가?",
          ]);
          era.println();
          if (plan_b) {
            await tachyon.say_and_wait(
              "당근이군…… 그러고 보니 경품이 하나같이 실용적이야",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 별말 없이 자연스럽게 ",
              you.get_colored_name(),
              "의 손에서 당근을 받아 작은 조각으로 부러뜨려 입에 넣었다",
            ]);
            era.println();
            await tachyon.say_and_wait("좋군, 달아");
          } else if (relation <= 225) {
            await tachyon.say_and_wait([
              "호오?",
              callname,
              ", 지금 그 표정, 나쁘지 않군",
            ]);
            era.println();
            await era.printAndWait("어? 표정?");
            era.println();
            await tachyon.say_and_wait("어이없음, 실망, 위안. 복잡한 표정이로군");
            era.println();
            await era.printAndWait([
              "아…… 그러고 보니 ",
              tachyon.get_colored_name(),
              "의 감정 연구 때문에 추첨을 한 거였지",
            ]);
            await era.printAndWait(
              "……감정을 연구한다니, 사람 마음을 모르는 로봇 같다",
            );
            await era.printAndWait([
              "하지만 눈앞의 매드 사이언티스트 같은 ",
              tachyon.get_colored_name(),
              "을(를) 생각하면……",
            ]);
            await era.printAndWait([
              tachyon.sex,
              "이(가) 지금 「사람 마음 따위는 모르겠군」이라고 말해도 놀라지 않을 것이다",
            ]);
            era.println();
            await tachyon.say_and_wait([
              "오늘 실험은 일단 성공일세. 다음에는 다른 감정도 보여 주게, ",
              callname,
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 멋대로 ",
              you.get_colored_name(),
              "의 손에서 당근을 빼앗아 가느다란 끝부분을 부러뜨려 입에 넣었다",
            ]);
            era.println();
            await tachyon.say_and_wait("맛은 나쁘지 않군");
          } else {
            await tachyon.say_and_wait("호오, 당근인가. 나쁘지 않지 않나?");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 다가와 ",
              you.get_colored_name(),
              "을(를) 위로했다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "겉만 번지르르한 물건보다 영양을 보충할 수 있는 쪽이 더 실용적이지",
            );
            await tachyon.say_and_wait(
              "당근이라면…… 돌아가서 달걀과 볶을까? 아니면 당근 햄버그? 주스로 만들어도 나쁘지 않겠군……",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "의 위로를 듣고 ",
              you.get_colored_name(),
              "도 웃음이 나왔다",
            ]);
            era.printButton("「그러려면 하나로는 부족하겠네」", 1);
            era.printButton("「좀 더 사야겠어」", 2);
            await era.input();
            await era.printAndWait([
              "이렇게 두 사람은 상점가로 돌아가 저녁에 쓸 당근을 샀다",
            ]);
            await era.printAndWait("……상점가의 판촉에 넘어간 것뿐 아닌가");
            await era.printAndWait([
              "돌아오는 길에 ",
              you.get_colored_name(),
              "은(는) 뒤늦게 깨달았다",
            ]);
          }
          break;
        case 3:
          await you.say_as_passer_by_and_wait(
            "가게 주인",
            "이등, 산더미처럼 쌓인 당근!",
          );
          era.println();
          await era.printAndWait("우와! 엄청 많아!");
          await era.printAndWait("말 그대로 작은 산처럼 쌓여 있었다");
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait("호오, 나쁘지 않군?");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 기쁜 표정을 지었다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "이번 달, 아니 반년은 당근 걱정 없겠군",
            );
            era.println();
            if (you.race > 0) {
              await era.printAndWait([
                "아니, ",
                tachyon.uma_sex_title,
                "이라도 이렇게 많은 양은 다 못 먹겠지……",
              ]);
              era.println();
              await tachyon.say_and_wait([
                "일반적으로 ",
                tachyon.uma_sex_title,
                "은(는) 소비하는 에너지가 많을수록 보충도 많이 해야 하네. 즉, 먹는 양＝강함이라는 식은 성립할 수 있다는 말일세",
              ]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                "은(는) 값을 매기듯 ",
                you.get_colored_name(),
                "의 몸을 훑어보았다",
              ]);
              era.println();
              await tachyon.say_and_wait(
                "식욕을 늘리는 약인가?…… 쿠후후, 나쁘지 않은 선택일지도 모르겠군",
              );
              era.println();
              await era.printAndWait([
                "이 산더미 같은 당근은 꼼짝없이 ",
                you.get_colored_name(),
                " 혼자의 책임이 될 것 같다",
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                "은(는) 어깨를 축 늘어뜨리고 당근 한 수레를 끌며 ",
                tachyon.get_colored_name(),
                "과(와) 트레센 학원으로 돌아갔다",
              ]);
            } else {
              await era.printAndWait([
                "하지만 인간이 이렇게 많은 당근을 어떻게 해치우지……",
                you.get_colored_name(),
                "은(는) 그 고민을 ",
                tachyon.get_colored_name(),
                "에게 털어놓았다",
              ]);
              era.println();
              await tachyon.say_and_wait([
                "호오…… 인간을 ",
                tachyon.uma_sex_title,
                "으로 바꾸는 가능성을 실험하자는 뜻인가? 그 연구라면…… 못 할 것도 없지……",
              ]);
              era.println();
              await you.say_and_wait("…………타키온?");
              era.println();
              await tachyon.say_and_wait([
                "쿠후후…… 새로운 연구의 가능성일세, ",
                callname,
                "……이건 만일을 위한 Plan C로 해 두지",
              ]);
              era.println();
              era.print([
                "위험하고 불길한 말에 ",
                you.get_colored_name(),
                "은(는) 등골이 오싹해졌다",
              ]);
              era.printButton("「그…… 그냥 타키온에게 줄게」", 1);
              era.printButton("「추첨권은 타키온 거니까」", 2);
              await era.input();
              await tachyon.say_and_wait(
                "……뭐, 됐네. 아쉽군. 모처럼 좋은 기회였는데",
              );
              era.println();
              await era.printAndWait([
                "또다시 위기를 벗어난 ",
                you.get_colored_name(),
                "은(는) ",
                tachyon.get_colored_name(),
                "과(와) 당근 한 수레를 끌고 트레센 학원으로 돌아갔다",
              ]);
            }
          } else {
            era.println();
            await era.printAndWait([
              "경품을 본 순간 ",
              you.get_colored_name(),
              "은(는) 생각하기 시작했다. 당근이 이만큼 있으면……",
              tachyon.get_colored_name(),
              "에게 몇 끼나 만들어 줄 수 있을까",
            ]);
            era.println();
            await tachyon.say_and_wait("많기도 하군……");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "도 산더미 같은 양에 눈을 크게 떴다",
            ]);
            era.println();
            await tachyon.say_and_wait("이거라면…… 좋은 생각이 떠올랐네……");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 생각에 잠겼다",
            ]);
            await era.printAndWait([
              tachyon.sex,
              "을(를) 잘 아는 ",
              you.get_colored_name(),
              "은(는) 즉시 위험을 감지했다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "……공짜 당근…… 약…… 오구리 캡이나 스페셜 위크를……",
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 황급히 ",
              tachyon.sex,
              "의 생각을 끊었다",
            ]);
            era.printButton(
              "「그…… 그래, 당근 풀코스를 만들자!」",
              1,
            );
            era.printButton(
              "「요, 요즘 당근이 주재료인 요리를 많이 배웠거든!」",
              2,
            );
            await era.input();
            await tachyon.say_and_wait('………………');
            era.println();
            await era.printAndWait("역시…… 안 되나");
            era.println();
            await tachyon.say_and_wait([
              "왜 진작 말하지 않았나! 어디, 찌고, 삶고, 볶고, 튀기고…… 어떻게 만들 텐가～～",
              callname,
              ", 마음껏 만들어 보게! 재료는 충분하지? 더 필요한가?",
            ]);
            era.println();
            await era.printAndWait([
              "이미 충분하다며 ",
              you.get_colored_name(),
              "은(는) 쓴웃음을 짓고 고개를 저었다",
            ]);
            await era.printAndWait([
              "음식으로 ",
              tachyon.get_colored_name(),
              "의 관심을 돌릴 수 있어서 다행이다…… 잘못하면 벌을 받을지도 모르지만",
            ]);
            await era.printAndWait(
              "내가 약을 먹는 편이 학원 전체를 휘말리게 하는 것보다는 낫다……",
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 당근 한 수레를 끌고 들뜬 ",
              tachyon.get_colored_name(),
              "과(와) 트레센으로 돌아왔다. 돌아오는 동안에도 ",
              tachyon.get_colored_name(),
              "이(가) 만족할 요리를 어떻게 만들지 고민했다",
            ]);
          }
          break;
        case 4:
          await you.say_as_passer_by_and_wait(
            "가게 주인",
            "일등, 초대형 당근 햄버그!",
          );
          era.println();
          await era.printAndWait("어……?");
          await era.printAndWait("일등이 이거라고?");
          era.println();
          await era.printAndWait(
            "……그렇군, 유명 셰프가 만든 거다. 들어 본 적 없는 사람이지만",
          );
          await era.printAndWait(
            "착각인가. 이등인 당근 한 수레가 더 이득인 것 같은데",
          );
          era.println();
          await tachyon.say_and_wait([
            "호오, 일등이군…… 그런데 ",
            callname,
            ", 별로 기뻐 보이지 않는군?",
          ]);
          era.printButton("「이 경품은 타키온밖에 못 먹잖아」", 1);
          era.printButton("「뭔가…… 이등이 더 나은 것 같아」", 2);
          await era.input();
          await tachyon.say_and_wait(
            "호오?…… 그래, 어떤 의미에서는 맞는 말일세. 셰프가 만들었다고 해도 결국 당근과 고기니까",
          );
          await tachyon.say_and_wait(
            "원재료만 따지면 그 가치는 이등의 당근 양에 못 미치지",
          );
          if (love >= 75) {
            await tachyon.say_and_wait(
              "그럼 내가 그에 걸맞은 가치를 더해 주겠네……",
            );
            era.println();
            await era.printAndWait([
              "그렇게 말하며 ",
              tachyon.get_colored_name(),
              "은(는) 경품으로 받은 햄버그를 집어 들었다",
            ]);
            await era.printAndWait([
              "한입 크기로 잘라 ",
              you.get_colored_name(),
              "의 입가에 내밀었다",
            ]);
            await era.printAndWait("어, 이건……");
            era.println();
            await tachyon.say_and_wait(
              "사랑하는 사람과 함께 먹는 햄버그…… 이러면 가치가 올라갔으려나?",
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "이(가) 대답하기도 전에 ",
              tachyon.get_colored_name(),
              "은(는) 햄버그를 ",
              you.get_colored_name(),
              "의 입에 밀어 넣었다",
            ]);
            await era.printAndWait([
              "다 씹을 때까지 ",
              tachyon.sex,
              "은(는) 포크를 빼지 않았다",
            ]);
            era.println();
            await tachyon.say_and_wait("다음은 자네 차례일세, 달링❤");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 입을 벌리고 ",
              you.get_colored_name(),
              "이(가) 먹여 주기를 기다렸다",
            ]);
            await era.printAndWait(["두 사람은 그 햄버그를 나누어 먹었다"]);
          } else if (love >= 50) {
            await tachyon.say_and_wait("……게다가 맛도 자네만 못하군");
            era.println();
            await era.printAndWait("어……?");
            await era.printAndWait(
              "칭찬받아 기쁘지만 내 솜씨가 이 유명 셰프보다 뛰어나다고는 생각하지 않는다……",
            );
            era.println();
            await tachyon.say_and_wait(
              "쿠후후…… 중요한 건 영양도 맛도 아니라 만드는 마음…… 그걸 가르쳐 준 건 자네 아닌가?",
            );
            era.println();
            await era.printAndWait([
              "그렇게 말하며 ",
              tachyon.get_colored_name(),
              "은(는) 경품으로 받은 햄버그를 집어 들었다",
            ]);
            await era.printAndWait([
              "한입 크기로 잘라 ",
              you.get_colored_name(),
              "의 입가에 내밀었다",
            ]);
            await era.printAndWait("어, 이건……");
            era.println();
            await tachyon.say_and_wait(
              "하지만 자네 말대로군…… 비교하지 않고는 단정할 수 없어. 과학은 엄밀해야 하니까",
            );
            await tachyon.say_and_wait(
              "그러니…… 기술은 있지만 사랑은 없는 것과, 기술은 부족해도 사랑이 있는 것. 어느 쪽이 나을까……❤",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 햄버그를 부드럽게 ",
              you.get_colored_name(),
              "의 입에 넣어 주었다",
            ]);
            await era.printAndWait("그러고는 작은 조각을 잘라 자기 입에도 넣었다");
            era.println();
            await tachyon.say_and_wait([
              "돌아가면 하나 더 만들어 비교해 주게, ",
              callname,
              '❤️',
            ]);
            era.println();
            await era.printAndWait([tachyon.sex, "의 미소 앞에서는"]);
            await era.printAndWait(
              "정말 모르모트가 된 듯 시키는 대로 따를 수밖에 없었다",
            );
          } else if (cook_times === 0) {
            await tachyon.say_and_wait(
              "하지만 나밖에 먹을 수 없다는 건 틀렸네",
            );
            era.println();
            await era.printAndWait([
              "그렇게 말하며 ",
              tachyon.get_colored_name(),
              "은(는) 경품으로 받은 햄버그를 집어 들었다",
            ]);
            await era.printAndWait([
              "한입 크기로 잘라 ",
              you.get_colored_name(),
              "의 입가에 내밀었다. ",
            ]);
            await you.say_and_wait("어, 이건……");
            era.println();
            await tachyon.say_and_wait(
              "당근의 영양은 인간에게도 이롭다네. 햄버그의 동물성 단백질도 그렇고……",
            );
            await tachyon.say_and_wait([
              "오히려 인간의 소화 속도라면 고기에 대한 필요량은 ",
              tachyon.uma_sex_title,
              "보다 더 높을 정도지",
            ]);
            era.println();
            await era.printAndWait(
              "아니, 그게 아니라. 그러니까 이건…… 나에게 먹여 주고 싶다는 건가?",
            );
            era.println();
            await tachyon.say_and_wait("쳇…… 착하지, 아앙");
            era.println();
            await era.printAndWait("서, 설마 「아앙」까지");
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 감동하며 햄버그를 먹었다……",
            ]);
            era.drawLine();
            era.printButton("「…………언제」", 1);
            await era.input();
            await era.printAndWait("이유 없는 친절에는 반드시 꿍꿍이가 있다");
            await era.printAndWait("하지만…… 미인계에는 막을 도리가 없다");
            await era.printAndWait([
              "상대가 ",
              you.get_colored_name(),
              "에게 음식을 먹여 주려는 절세의 미모를 지닌 ",
              tachyon.teen_sex_title,
              "이라면 더더욱",
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 몸에서 점점이 흘러나오는 짙푸른 빛을 보고 어이없어하며 물었다",
            ]);
            era.println();
            await tachyon.say_and_wait([
              "흥, 자네에게 약을 타는 걸 들킬 정도라면 매일 고생하며 ",
              call_25,
              "에게 조제약을 먹이는 보람이 없지 않나",
            ]);
            await tachyon.say_and_wait(
              "나머지는…… 자네가 먹게. 이런 것에는 관심 없으니까",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "……어째서인지 ",
              tachyon.sex,
              "은(는) 음식에 바라는 수준이 극도로 낮다",
            ]);
            await era.printAndWait("낮다기보다는…… 바라는 게 없다");
            await era.printAndWait("영양만 섭취할 수 있다면 뭐든 상관없다");
            await era.printAndWait(
              "하지만…… 아직 새해 분위기가 남아 있지 않은가…… 조금쯤 주제넘게 굴어도 되겠지",
            );
            era.printButton("「……정말 맛있어. 타키온도 한입 어때?」", 1);
            await era.input();
            await tachyon.say_and_wait(
              "됐네. 사양하는 게 아니라 정말 필요 없어",
            );
            era.printButton(
              "「그래도 추첨권은 타키온 거잖아. 직접 맛보지 않으면 불공평하지」",
              1,
            );
            await era.input();
            await tachyon.say_and_wait("……그렇군. 한입만");
            era.println();
            await era.printAndWait([
              "정신을 차렸을 때 ",
              you.get_colored_name(),
              "의 포크에 있던 고기는 ",
              tachyon.get_colored_name(),
              "이(가) 전광석화처럼 베어 간 뒤였다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "좋군, 맛은 나쁘지 않아. 이걸로 충분하네",
            );
            era.println();
            await era.printAndWait("……너무 빠르잖아!?");
            await era.printAndWait("입을 움직이는 것도 안 보였어……!");
            await era.printAndWait([
              '……',
              tachyon.sex,
              "이(가) 진심으로 식사를 즐긴다면 식탁 위 쟁탈전에서는 무적일 것이다",
            ]);
            await era.printAndWait([
              "어째서인지 ",
              you.get_colored_name(),
              "은(는) 그런 엉뚱한 생각을 하기 시작했다",
            ]);
          } else {
            await tachyon.say_and_wait("그럼…… 내가 그에 걸맞은 가치를 더해 주지");
            era.println();
            await era.printAndWait([
              "그렇게 말하며 ",
              tachyon.get_colored_name(),
              "은(는) 경품으로 받은 햄버그를 집어 들었다",
            ]);
            await era.printAndWait([
              "한입 크기로 잘라 ",
              you.get_colored_name(),
              "의 입가에 내밀었다",
            ]);
            await era.printAndWait("어, 이건……");
            if (relation <= 225) {
              await tachyon.say_and_wait([
                "G1을 달리는 ",
                tachyon.uma_sex_title,
                '、',
                tachyon.get_colored_name(),
                "이(가) 직접 먹여 주는 햄버그. 이러면 그에 걸맞은 가치가 생겼으려나?",
              ]);
            } else {
              await tachyon.say_and_wait([
                "빼어난 미모의 ",
                tachyon.teen_sex_title,
                "이자 G1을 달리는 ",
                tachyon.uma_sex_title,
                "인 ",
                tachyon.get_colored_name(),
                "이(가) 직접 먹여 주는 햄버그. 한입에 얼마까지 내겠나?",
              ]);
            }
            era.println();
            await tachyon.say_and_wait("자, 착하지, 아앙");
            era.println();
            await era.printAndWait("서, 설마 「아앙」까지");
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 감동하며 햄버그를 먹었다……",
            ]);
            era.drawLine();
            era.printButton("「…………언제」", 1);
            await era.input();
            await era.printAndWait("이유 없는 친절에는 반드시 꿍꿍이가 있다");
            await era.printAndWait("하지만…… 미인계에는 막을 도리가 없다");
            await era.printAndWait([
              "상대가 ",
              you.get_colored_name(),
              "에게 음식을 먹여 주려는 절세의 미모를 지닌 ",
              tachyon.teen_sex_title,
              "이라면 더더욱",
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 몸에서 점점이 흘러나오는 짙푸른 빛을 보고 어이없어하며 물었다",
            ]);
            era.println();
            await tachyon.say_and_wait([
              "흥, 자네에게 약을 타는 걸 들킬 정도라면 매일 고생하며 ",
              call_25,
              "에게 조제약을 먹이는 보람이 없지 않나",
            ]);
            await tachyon.say_and_wait("나머지는…… 잠깐! 한입은 남기게!");
            era.println();
            await era.printAndWait([
              "울분을 식욕으로 바꾼 ",
              you.get_colored_name(),
              "은(는) 필사적으로 ",
              tachyon.get_colored_name(),
              "과(와) 남은 햄버그를 두고 쟁탈전을 벌였다",
            ]);
            await era.printAndWait(
              "…………인정할 수밖에 없다. 유명 셰프의 솜씨는 나보다 뛰어나다",
            );
          }
          break;
        case 5:
          if (love >= 75) {
            await tachyon.say_and_wait("……그래. 지금일세");
            await tachyon.say_and_wait("돌리게!");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "을(를) 믿는 ",
              you.get_colored_name(),
              "은(는) ",
              tachyon.sex,
              "의 말을 듣자마자 추첨기를 돌렸다",
            ]);
            await you.say_as_passer_by_and_wait("가게 주인", "특등! 온천 여행권!");
            era.println();
            await era.printAndWait("상점가 아저씨가 종을 힘껏 흔들었다");
            await era.printAndWait("오늘의 일등이 지금 나왔다고 알렸다");
            era.println();
            await tachyon.say_and_wait(
              "호오…… 온천 여행권이군. 나쁘지 않아",
            );
            era.println();
            await era.printAndWait("기한은…… 내년 4월까지");
            await era.printAndWait("그럼 URA 결승이 끝난 뒤가 딱 좋겠다");
            era.printButton("「타키온, 같이 갈래?」", 1);
            await era.input();
            await tachyon.say_and_wait(
              "당연하지. 나 말고 누가 자네와 가겠나?",
            );
            era.println();
            await era.printAndWait("가차 없는 말투다");
            era.println();
            await tachyon.say_and_wait(
              "농담일세. 이 표는 삼 년 동안 수고한 자네에게 주는 포상이야…… 모든 어려움과 부상을 넘어선 끝의…… 우리의 해피 엔딩",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) ",
              you.get_colored_name(),
              "의 귓가에 속삭였다",
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              "의 입에서 나왔다고는 믿기지 않는 말에 ",
              you.get_colored_name(),
              "은(는) 놀라 고개를 들려 했다……",
            ]);
            era.println();
            await tachyon.say_and_wait("움직이지 말게");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 여전히 ",
              you.get_colored_name(),
              "에게 바싹 붙어 있었다. 두 사람은 추첨기 앞에서 다정하게 이야기를 나눴다",
            ]);
            await era.printAndWait("이상한데…… 왜 추첨기 앞을 떠나지 않지……?");
            era.println();
            await tachyon.say_and_wait(["좋아, 가도록 하지, ", callname]);
            era.println();
            await era.printAndWait("어");
            await era.printAndWait([
              "곁의 온기가 갑자기 사라지자 ",
              you.get_colored_name(),
              "은(는) 황급히 ",
              tachyon.get_colored_name(),
              "을(를) 따라 상점가를 나섰다",
            ]);
            await era.printAndWait([
              "상점가를 나온 ",
              tachyon.get_colored_name(),
              "이(가) 왼쪽 눈에서 무언가를 꺼내는 게 보였다",
            ]);
            era.println();
            await tachyon.say_and_wait("후우, 이제야 편하군");
            era.println();
            await era.printAndWait([
              '…………？',
              tachyon.get_colored_name(),
              "의 눈이……?",
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 자세히 보았다. 원래 ",
              tachyon.sex,
              "의 두 눈은 붉은 그라데이션을 띠는데, 한쪽만 색이 조금 옅었다",
            ]);
            era.println();
            await you.say_and_wait("……컬러 렌즈?");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 그런 걸 끼는 사람이라고는 생각되지 않는다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "쿠후후…… 이건 샤커와 함께 만든 물건일세",
            );
            await tachyon.say_and_wait(
              "우선 내 약제로 이 렌즈에 무생물을 투시하는 능력을 부여하지",
            );
            await tachyon.say_and_wait(
              "샤커는 보이는 것의 궤도를 분석할 수 있네. 원래는 레이스에서 주자를 분석하려고 만든 거야",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "이(가) 쉴 새 없이 설명해서 ",
              you.get_colored_name(),
              "은(는) 조금 어지러워졌다",
            ]);
            await era.printAndWait("하지만……");

            era.printButton("「그러니까…… 투시 렌즈라는 거야?」", 1);
            await era.input();
            await tachyon.say_and_wait(
              "뭐, 그런 셈이지…… 다만 작은 결함이 있네",
            );
            await tachyon.say_and_wait(
              "예를 들면 끼고 있으면 달라진 시야에 적응할 때까지 한 발짝도 걸을 수 없지",
            );
            await tachyon.say_and_wait(
              "남용하면 정보량이 너무 많아 뇌가 견디지 못하고 기절할 수도 있고",
            );
            await tachyon.say_and_wait(
              "그래서 샤커와 봉인해 둘 생각이었네. 쿠후후, 여기서 쓸모가 있을 줄이야……",
            );
            era.println();
            await era.printAndWait("쓸모……?");
            await era.printAndWait("투시＋궤도 분석……");
            await era.printAndWait("움직일 수 없으니 경품 추첨기 앞에 서 있는다……");
            await you.say_and_wait("아");
            era.printButton("「아까 그 경품 추첨!」", 1);
            era.printButton("「타키온, 너……」", 2);
            await era.input();
            await tachyon.say_and_wait("쉿");
            era.println();
            await era.printAndWait([
              tachyon.sex,
              "은(는) 입술에 손가락을 대고 조용히 하라는 신호를 보냈다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "말했잖나. 이건 자네에게 주는 선물일세",
            );
            era.println();
            await tachyon.say_and_wait("신도, 눈에 보이지 않는 운도 아니야");
            await tachyon.say_and_wait([
              "나, ",
              tachyon.get_colored_name(),
              "이(가) 사랑하는 사람에게 주는 새해 선물이지",
            ]);
            await tachyon.say_and_wait([
              "새해 복 많이 받게, ",
              you.get_colored_actual_name(),
              " 군",
            ]);
            era.println();
            await era.printAndWait(
              "예전에는 새해라고 하면 잊을 수 없는 추억이 여럿 떠올랐다",
            );
            await era.printAndWait(
              "화로, 가족이 함께 모인 시간, 설 음식, 텔레비전의 시시한 신년 방송",
            );
            await era.printAndWait(
              "하지만 오늘부터 새해 하면 가장 먼저 떠오르는 것은 하나뿐일 것이다",
            );
            await era.printAndWait([
              "막 불이 켜진 가로등 아래, 장난에 성공한 새끼 고양이처럼 웃는 ",
              tachyon.sex,
            ]);
            era.println();
            await era.printAndWait("그리고 그 입맞춤의 맛");
            await era.printAndWait([
              "그 입맞춤은 달콤했다. ",
              tachyon.get_colored_name(),
              "의 홍차보다도 달콤했다",
            ]);
          } else {
            await you.say_as_passer_by_and_wait("가게 주인", "특등! 온천 여행권!");
            era.println();
            await era.printAndWait("상점가 아저씨가 종을 힘껏 흔들었다");
            await era.printAndWait("오늘의 일등이 지금 나왔다고 알렸다");
            era.println();
            await era.printAndWait("특등이다!");
            await era.printAndWait("2인용 온천 여행권이잖아");
            era.println();
            await tachyon.say_and_wait(
              "호오…… 온천 여행권이군. 나쁘지 않아",
            );
            era.println();
            await era.printAndWait("기한은…… 내년 4월까지");
            await era.printAndWait("그럼 URA 결승이 끝난 뒤가 딱 좋겠다");
            era.println();
            if (love >= 50) {
              era.printButton("「타키온, 같이 가자!」", 1);
              await era.input();
              await tachyon.say_and_wait("흠…… 같이 말인가?");
              await tachyon.say_and_wait([
                callname,
                ", 일반적으로 『온천 여행을 함께 가는』 관계가 어떤 건지 알고 권하는 건가?",
              ]);
              era.println();
              await era.printAndWait("일반적으로 온천에 함께 가는 관계라면……");
              era.printButton("부부", 1);
              era.printButton("연인", 2);
              era.printButton(
                `「……보통 ${tachyon.uma_sex_title}과(와) 트레이너는 원래 가는 거 아니야?」`,
                3,
              );
              switch (await era.input()) {
                case 1:
                  await era.printAndWait("일반적으로는…… 신혼부부겠지");
                  await era.printAndWait("신혼여행으로 온천에 가는 일은 흔하다");
                  await you.say_and_wait(
                    "……나와 타키온이 신혼부부……?",
                    true,
                  );
                  break;
                case 2:
                  await era.printAndWait("아마…… 연인이겠지");
                  await era.printAndWait(
                    "그만큼 친하지 않으면 단둘이 온천에 가지는 않을 것이다",
                  );
                  await you.say_and_wait("나와 타키온이…… 연인인가?", true);
                  break;
                case 3:
                  await era.printAndWait([
                    "……아니, 보통 ",
                    tachyon.uma_sex_title,
                    "과(와) 트레이너는 자주 가지 않나?",
                  ]);
                  await era.printAndWait([
                    "매년 4월이면 선배들이 담당 ",
                    tachyon.uma_sex_title,
                    "과(와) 간다…… 게다가 상점가 추첨으로 얻은 표라던데. 신기한 일이다",
                  ]);
                  await era.printAndWait(
                    "하지만…… 단둘이 온천이라니 역시 조금 묘한가……?",
                  );
                  era.println();
                  await tachyon.say_and_wait([
                    "그럼 그때 나와 어떤 관계가 되고 싶은 건가?",
                    callname,
                    "……내년 4월이라, 쿠후후. 기대되는군",
                  ]);
                  era.println();
                  await you.say_and_wait(
                    "내년 4월, 나와 타키온의 관계라……",
                    true,
                  );
              }
            } else if (relation >= 225) {
              await tachyon.say_and_wait(
                "그래…… 함께 가자고? 실험 장소로는 나쁘지 않군",
              );
              await tachyon.say_and_wait(
                "온천 여관이라면 사고가 나도, 사람이 죽어도 이상하지 않은 곳이지 않나",
              );
              await tachyon.say_and_wait(
                "그렇다면 무해한 작은 실험쯤은 문제없겠지……",
              );
              era.printButton("「아니야」", 1);
              await era.input();
              await era.printAndWait("실험이나 연구를 하러 가는 게 아니다");
              await era.printAndWait(
                "삼 년 동안 둘이 발맞춰 걸어온 뒤 함께 보내는 휴가다",
              );
              era.printButton(
                "「트레이닝도 실험도 상관없어. 그냥 쉬는 것뿐이야…… 안 될까?」",
                1,
              );
              await era.input();
              await tachyon.say_and_wait("……내년 4월인가");
              await tachyon.say_and_wait(
                "쿠후후, 그럼 모르모트에게 주는 위로의 포상으로 하지",
              );
              await tachyon.say_and_wait(
                "내년 4월, 우리의 꿈이 한 단락을 마쳤을 때…… 그때도 곁에 있다면 함께 가도록 하지",
              );
              era.printButton("「그래!」", 1);
              await era.input();
              await tachyon.say_and_wait("다만 포상을 내건 이상……");
              await tachyon.say_and_wait(
                "남은 일 년 동안 자네도 힘써 줘야겠지",
              );
              await tachyon.say_and_wait([
                "얌전히 실험을 받고, 매일 요리하고, 또 ",
                call_25,
                "이(가) 도망치면 붙잡아서 내 실험에……",
              ]);
              era.println();
              await era.printAndWait("잠깐, 잠깐! 마지막 건 아무리 봐도 무리잖아!");
              era.println();
              await era.printAndWait([
                "웃으며 두 사람은 트레센 학원으로 돌아갔다",
              ]);
              await era.printAndWait("내년 4월이라…… 기대된다");
            } else {
              await era.printAndWait([
                "하지만……",
                tachyon.get_colored_name(),
                "은(는) 나와 함께 가 줄까",
              ]);
              era.println();
              await tachyon.say_and_wait(
                "URA 결승 뒤에 온천 여행이라…… 나쁘지 않군",
              );
              era.println();
              await era.printAndWait("어라? 순순히 승낙했네?");
              await era.printAndWait("귀찮다고 거절할 줄 알았는데");
              era.println();
              await tachyon.say_and_wait(
                "온천 여관이라면 사고가 나도, 사람이 죽어도 이상하지 않은 곳이지. 그렇다면 무해한 작은 실험쯤은 문제없겠지……",
              );
              era.println();
              await era.printAndWait("…………지금이라도 표를 돌려주는 게 나을까?");
            }
          }
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = "밸런타인";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      if (love >= 75) {
        await tachyon.say_and_wait([
          "자, ",
          callname,
          ", 밸런타인 초콜릿일세",
        ]);
        era.println();
        await era.printAndWait([
          "트레이너실에 불쑥 들어온 ",
          tachyon.get_colored_name(),
          "의 담담한 말에 ",
          you.get_colored_name(),
          "은(는) 오늘이 밸런타인이라는 걸 깨달았다",
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 트레이닝에 온종일 매달리느라 날짜조차 잊고 있었다",
        ]);
        era.println();
        await you.say_and_wait("그나저나…… 타키온이 주는 초콜릿인가", true);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "이(가) 등 뒤에서 꺼낸 하트 모양 상자를 보았다. 작은 칸마다 한입 크기의 초콜릿이 나란히 들어 있었다",
        ]);
        await era.printAndWait("안에는 설마……");
        era.println();
        await tachyon.say_and_wait(
          "응? 그 표정은 뭔가. 안에 약을 넣었다고 생각했나?",
        );
        era.printButton("고개를 끄덕인다", 1);
        era.printButton("「안 넣었어?」", 2);
        await era.input();
        await tachyon.say_and_wait(
          "……너무하는군. 반박은 못 하겠지만",
        );
        await tachyon.say_and_wait(
          "하지만 오늘은…… 특별한 날이지 않나. 그런 짓은 안 하네",
        );
        await tachyon.say_and_wait(
          "못 믿겠다면 내가 먼저 하나 먹어 볼까?",
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "이(가) 초콜릿을 천천히 입에 밀어 넣는 모습을 지켜보았다",
        ]);
        await era.printAndWait(
          "앞니에 닿은 초콜릿은 연분홍 입술이 조금 벌어질 때마다",
        );
        await era.printAndWait("한입, 두 입");
        await era.printAndWait([
          "손가락에 밀려 ",
          tachyon.get_colored_name(),
          "의 입안으로 사라져 갔다",
        ]);
        era.println();
        await era.printAndWait("이러면…… 안심하고 먹어도 되겠지");
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 손을 뻗어 책상 위의 초콜릿을 집으려 했다",
        ]);
        await era.printAndWait("하지만");
        era.printButton('「……？」', 1);
        await era.input();
        await era.printAndWait("손을 뻗는 순간 초콜릿 상자가 쑥 치워졌다");
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 고개를 갸웃한 바로 그때",
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait("무방비한 입술을 기습당했다");
        await era.printAndWait(
          "능숙한 혀가 이를 벌리자 달콤하고 끈적한 액체가 흘러들었다",
        );
        await era.printAndWait(
          "몸을 눌린 채 맞닿은 혀가 다리가 되어, 짙고도 짙은 액체가 흘러내렸다",
        );
        await era.printAndWait("달다, 달아");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 취향에 꼭 맞는 초콜릿이 입안에 스며들었다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "에게는 너무 달았을 맛인데도 ",
          tachyon.get_colored_name(),
          "의 혀가 휘저을수록 점점 익숙해졌다",
        ]);
        await era.printAndWait([
          "몸부터 개조되어 ",
          tachyon.get_colored_name(),
          "의 취향에 맞춰지는 기분이었다",
        ]);
        await era.printAndWait(
          "……아니, 맞춘다는 표현은 적절하지 않을지도 모른다",
        );
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          ", 초콜릿은 아직 잔뜩 있다네❤️",
        ]);
        era.println();
        await era.printAndWait("눈앞의 연인이 정욕과 야성적인 욕망으로 가득한 눈을 하고 있다");
        await era.printAndWait("아아…… 「요리」된 재료는 이제 먹힐 차례다");
      } else if (love >= 50) {
        await tachyon.say_and_wait([
          "호오, ",
          callname,
          ", 해피 밸런타인!",
        ]);
        era.println();
        await era.printAndWait([
          "맑은 아침의 평온을 깨고 문을 열고 들어온 사람은 커다란 자루를 멘 ",
          tachyon.get_colored_name(),
          "이었다",
        ]);
        await era.printAndWait("……이상한데. 오늘은 크리스마스가 아닐 텐데");
        era.println();
        await tachyon.say_and_wait([
          "응? 이것들 말인가? 다른 ",
          tachyon.uma_sex_title,
          "들이 준 선물일세",
        ]);
        await tachyon.say_and_wait(
          "정말이지…… 필요 없다고 했는데도 말이야. 이런 것보다 자진해서 실험체가 되어 주는 편이 더 기쁠 텐데……",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는)…… 그렇게 인기가 많은가",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 가슴에 작은 질투가 일었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "그 이야기는 됐고, 아무튼 ",
          callname,
          ", 내 초콜릿을 받게!",
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 자루를 뒤지며 크기는 조금씩 달라도 비슷하게 생긴 초콜릿 사이에서 무언가를 찾았다",
        ]);
        await era.printAndWait(
          "설마…… 남에게 받은 초콜릿을 그대로 돌리는 것뿐인가?",
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          "과(와) 그런 사이도 아니면서, 나는 다를 거라고, 특별한 대접을 받을 거라고 생각하게 된다",
        ]);
        era.printButton("「그건…… 의리 초콜릿이야?」", 1);
        await era.input();
        await era.printAndWait("지도자로서는 해서는 안 될 질문이다");
        await era.printAndWait("하지만…… 역시");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 진심을 알고 싶다",
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "의 말에 ",
          tachyon.get_colored_name(),
          "은(는) 자루를 뒤지던 손을 멈췄다",
        ]);
        await era.printAndWait([
          "고개를 들고 ",
          you.get_colored_name(),
          "의 눈을 똑바로 바라보았다",
        ]);
        await era.printAndWait([
          "그 아름다운 붉은 눈동자가 ",
          you.get_colored_name(),
          "의 속을 꿰뚫어 보는 것 같았다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "호오, 그건 무슨 뜻인가, ",
          callname,
          '？',
        ]);
        await tachyon.say_and_wait("의리라면 어쩔 텐가?");
        await tachyon.say_and_wait([
          "아니면 자네는…… 어떤 초콜릿을 원하나?",
        ]);
        era.printButton("「타키온이 특별히 주는 거였으면 해」", 1);
        era.printButton(
          "「타키온이 나에게만 주는 초콜릿이었으면 해」",
          2,
        );
        await era.input();
        await era.printAndWait("끝내 그 두 글자만은 입에 담지 못했다");
        await era.printAndWait([
          "트레이너인 내가 담당 ",
          tachyon.uma_sex_title,
          "에게 「진심」인지 물을 수는 없지 않은가",
        ]);
        era.println();
        await tachyon.say_and_wait("그렇다면 주도록 하지");
        era.println();
        await era.printAndWait(
          "마침내 자루 맨 아래에서 일곱 빛깔로 절대 헷갈릴 일 없는 작은 포장을 꺼내고 나서",
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 초콜릿을 가슴 쪽 작은 주머니에 밀어 넣었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "자, 사랑스러운 실험동물에게. 한 해 동안의 감사…… 그리고 감사 이외의 마음을 담아❤",
        );
        await tachyon.say_and_wait("직접 꺼내 보게나");
        era.println();
        if (era.get('exp:0:性爱次数') === era.get('exp:0:睡奸次数')) {
          await era.printAndWait([
            tachyon.get_colored_name(),
            "이(가) 노골적으로 가슴을 내미는 모습을 보고",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 떨리는 손을 뻗었다",
          ]);
          await era.printAndWait("가슴에 닿지 않도록 조심스럽게 초콜릿을 꺼냈다");
        } else {
          await era.printAndWait([
            tachyon.get_colored_name(),
            "이(가) 노골적으로 가슴을 내미는 모습을 보고",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 거리낌 없이 손을 뻗어 초콜릿을 집었다",
          ]);
          await era.printAndWait([
            "도중에 집어 눈앞의 ",
            tachyon.uma_sex_title,
            "에게 달콤한 소리를 내게 한 살덩이는 뭐냐고?",
          ]);
          await era.printAndWait(
            "착각이겠지. 초콜릿을 놓는 선반이 소리를 낼 리 없잖은가",
          );
        }
        era.println();
        await era.printAndWait([
          "포장을 벗긴 뒤 ",
          you.get_colored_name(),
          "은(는) 초콜릿을 입에 넣었다",
        ]);
        await era.printAndWait("초콜릿은 입안에 들어가자마자 녹았다");
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait("돼지고기, 양파, 소스……");
        await era.printAndWait([
          "초콜릿에서 날 리 없는 맛이 ",
          you.get_colored_name(),
          "의 입안에 퍼졌다",
        ]);
        era.println();
        await tachyon.say_and_wait([callname, "? 그 표정, 이상하군?"]);
        await tachyon.say_and_wait(
          "어서, 어서. 효과는 어떤가?…… 몸의 변화는 보이지 않는데. 내면에 나타나는 건가……",
        );
        await era.printAndWait([
          "조금 전까지의 묘한 분위기는 온데간데없이 ",
          tachyon.get_colored_name(),
          "은(는) 흥분해서 ",
          you.get_colored_name(),
          "의 반응을 물었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          "? 연구실에서 반나절이나 들여 조합한 초콜릿을 평가해 주지 않을 텐가?",
        ]);
        era.println();
        await era.printAndWait("…………이 사람은");
      } else if (relation > 225) {
        await tachyon.say_and_wait(["하하하! ", callname, '！']);
        era.println();
        await era.printAndWait([
          "쾌활한 웃음소리와 함께 트레이너실 문을 연 사람은 커다란 자루를 멘 ",
          tachyon.get_colored_name(),
          "이었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "메리 크리스마스? 해피 뉴 이어? 아무튼 무슨 기념일이라더군. 어서, 어서 내 선물을 받게!",
        );
        era.printButton("「……밸런타인 말이지?」", 1);
        await era.input();
        await tachyon.say_and_wait(
          "흠…… 아무래도 좋네. 요컨대 합법적으로 남에게 음식을 떠넘길 수 있는 날 아닌가?",
        );
        era.println();
        await era.printAndWait("……그 해석도 틀리지는 않았나?");
        await era.printAndWait([
          "하지만 상대가 ",
          tachyon.get_colored_name(),
          "이라고 생각하면……",
        ]);
        era.printButton("「……무슨 약을 넣었어」", 1);
        era.printButton("「……몇 명에게 나눠 줬어」", 2);
        await era.input();
        await tachyon.say_and_wait(
          "그런 건 아무래도 좋네! 받게, 내 밸런타인을!",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 자루를 뒤져 유난히 커다란 초콜릿을 꺼내더니 ",
          you.get_colored_name(),
          "의 허락도 구하지 않고 손에 쥐여 주었다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "의 손놀림은 익숙했다. 오는 길에 이미 여러 사람에게 나눠 준 모양이다",
        ]);
        await era.printAndWait(
          "……내일은 여기저기 사과해야겠군. 하지만 우선 이 자리부터 살아서 넘기자",
        );
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 조심스럽게 초콜릿을 베어 물었다",
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait("발광, 변형, 머리가 둘이 되고, 등에 날개가 돋고, 액체로 변하고……");
        await era.printAndWait("어느 것도…… 일어나지 않았다");
        await era.printAndWait(
          "굳이 말하자면 아마, 어쩌면 그저 평범한 초콜릿이다",
        );
        await era.printAndWait([
          "하지만 이건 ",
          tachyon.get_colored_name(),
          " 기준의 「정상」이다",
        ]);
        await era.printAndWait("보통 사람이 생각하는 초콜릿인지는……");
        era.printButton("왜…… 돈가스 덮밥 맛이 나는 거야!?", 1);
        await era.input();
        await era.printAndWait("돼지고기, 양파, 소스……");
        await era.printAndWait([
          "초콜릿에서 날 리 없는 맛이 ",
          you.get_colored_name(),
          "의 입안에 퍼졌다",
        ]);
        era.println();
        await tachyon.say_and_wait([callname, "? 그 표정, 이상하군?"]);
        await tachyon.say_and_wait(
          "어서, 어서. 효과는 어떤가?…… 몸의 변화는 보이지 않는데. 내면에 나타나는 건가……",
        );
        era.println();
        await era.printAndWait(
          "이 사람은…… 자신도 효능을 모르는 약을 남에게 떠넘기는 건가",
        );
        await era.printAndWait([
          "다른 날이라면 몰라도 연인들이 빛나는 이날을 ",
          tachyon.get_colored_name(),
          "이(가) 망치다니…………",
        ]);
        await era.printAndWait([
          "이상하다. 갑자기 ",
          tachyon.get_colored_name(),
          "이(가) 옳은 것 같아졌다",
        ]);
        await era.printAndWait([
          "…………아무튼 ",
          tachyon.get_colored_name(),
          "에게는 조금 따끔한 맛을 보여 줘야겠다",
        ]);
        era.printButton("「효과가 없는 것 같은데」", 1);
        era.printButton("「타키온도 먹어 봐」", 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 대답을 기다리지 않고 ",
          you.get_colored_name(),
          "은(는) 한입 베어 문 초콜릿을 ",
          tachyon.get_colored_name(),
          "의 입에 밀어 넣었다",
        ]);
        era.println();
        await tachyon.say_and_wait("응!? 우읍!?");
        era.println();
        await era.printAndWait([
          "기습당한 ",
          tachyon.get_colored_name(),
          "은(는) 입안 가득 초콜릿이 들어찼다",
        ]);
        await era.printAndWait([
          "입을 열려고 ",
          tachyon.sex,
          "은(는) 어쩔 수 없이 삼켰다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "잠깐, 무슨 짓인가! ",
          callname,
          '！？',
        ]);
        await tachyon.say_and_wait("우웩…… 이 맛은 뭔가!?");
        await tachyon.say_and_wait([
          "이상한 맛이야!! 왜 초콜릿에서 돈가스 맛이 나는 거지!",
        ]);
        era.println();
        await era.printAndWait([
          "내일은 보복을 당하겠지. 하지만 지금 ",
          tachyon.get_colored_name(),
          "의 놀라움과 구역질이 뒤섞인 얼굴을 보니",
        ]);
        await era.printAndWait([you.get_colored_name(), "은(는) 속이 후련했다"]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "과(와) ",
          tachyon.get_colored_name(),
          "의 떠들썩한 밸런타인은 그렇게 끝났다",
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          "! 하하하, 해피 밸런타인!",
        ]);
        era.printButton("「……타키온?」", 1);
        await era.input();
        await era.printAndWait([
          "이토록 들뜬 ",
          tachyon.get_colored_name(),
          "을(를) 보고 ",
          you.get_colored_name(),
          "은(는) 경계했다",
        ]);
        await era.printAndWait([
          "이유는 단순하다. 평소에는 쌀쌀맞던 ",
          tachyon.get_colored_name(),
          "이(가) 오늘은 이상할 만큼 들떠 있었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "응?",
          callname,
          "? 무슨 일인가. 밸런타인 축하 인사도 안 할 텐가? 혹시…… 내가 싫은 건가…… 으윽……",
        ]);
        await tachyon.say_and_wait("으으…… 음…… 머리가…… 어질어질하군……");
        era.println();
        await era.printAndWait([
          "이상하다. 오늘의 ",
          tachyon.get_colored_name(),
          "은(는)…… 어딘가 묘하다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "의 얼굴을 자세히 살폈다. 추위나 흥분 때문인 줄 알았던 옅은 홍조와 풀린 두 눈이 눈에 들어왔다",
        ]);
        era.printButton("「……타키온, 술 마셨지?」", 1);
        await era.input();
        await tachyon.say_and_wait("음…… 안 마셨네……");
        await tachyon.say_and_wait(
          "그냥…… 그냥…… 실수로 에탄올 혼합물을…… 조금……",
        );
        era.println();
        await era.printAndWait("에탄올 혼합물…… 그게 술이잖아!?");
        await era.printAndWait([
          "그래서 ",
          tachyon.get_colored_name(),
          "의 상태가 이상했던 건가……",
        ]);
        await era.printAndWait("아무튼 오늘 트레이닝은 무리다");
        await era.printAndWait(["우선 ", tachyon.sex, "을(를) 쉬게 하자"]);
        era.println();
        await era.printAndWait([
          "하지만 쉴 생각이 없는 ",
          tachyon.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "의 손을 피했다",
        ]);
        await era.printAndWait(
          "품을 뒤져 가운 안주머니에 늘 숨겨 두는 약병들 사이에서, 마침내 실험용 거름종이에 싸인 것을 찾아냈다",
        );
        await era.printAndWait("열어 보니 일곱 빛깔 초콜릿 하나였다");
        era.println();
        await tachyon.say_and_wait(["음…… 그…… 그렇지……", callname, '……？']);
        await tachyon.say_and_wait("배…… 밸런타인 초콜릿……");
        era.drawLine();
        await era.printAndWait("이렇게 불길한 밸런타인은 처음이다");
        await era.printAndWait("이런 수상한 초콜릿을 정말 먹어야 하나");
        era.printButton("「이건…… 뭘로 만들었어?」", 1);
        await era.input();
        await tachyon.say_and_wait("뭘…… 로? 음…… 잊어버렸네……");
        await tachyon.say_and_wait(
          "분명…… 분명…… 코코아 가루…… 우유…… 설탕…… 간장…… 양파…… 생돼지고기?",
        );
        era.println();
        await era.printAndWait(
          "마지막 몇 개는 초콜릿에 들어갈 재료가 아니잖아!?",
        );
        await era.printAndWait("그래도…… 독은 안 들어갔다고 기뻐해야 하나");
        await era.printAndWait("맛은 분명 이상하겠지만");
        era.println();
        await tachyon.say_and_wait("왜…… 왜 안 먹는 건가……");
        await tachyon.say_and_wait([
          "먹게……",
          callname,
          "……내 체면을…… 구길 셈인가……",
        ]);
        era.println();
        await era.printAndWait("왜 갑자기 술 권하는 아저씨 말투가 됐어!?");
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 좀처럼 손을 내밀지 않자 ",
          tachyon.get_colored_name(),
          "은(는) 직접 초콜릿을 집었다",
        ]);
        await era.printAndWait("그리고…… 입에 물었다");
        era.println();
        await tachyon.say_and_wait(
          "음…… 이러면 머글 수 이찌 않나(이러면 먹을 수 있지 않나)",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 초콜릿을 가볍게 이로 물었다",
        ]);
        await era.printAndWait([
          "연분홍 입술을 조금 벌리고 ",
          you.get_colored_name(),
          "에게 반대쪽을 베어 물라는 뜻을 전했다",
        ]);
        await era.printAndWait("……어?");
        era.println();
        await tachyon.say_and_wait(
          "후후…… 이러면 뽀뽀도 할 쑤 이쓸지 모르지(이러면 입맞춤도 할 수 있을지 모르지)",
        );
        era.println();
        await era.printAndWait("……이게 술의 마력인가");
        await era.printAndWait([
          "평소 나에게 쌀쌀맞은 얼굴을 하던 ",
          tachyon.get_colored_name(),
          "이(가) 이렇게 부드럽고 요염하다니",
        ]);
        await era.printAndWait([
          "저도 모르게 ",
          you.get_colored_name(),
          "은(는) 다가가 초콜릿을 베어 물었다",
        ]);
        era.println();
        await era.printAndWait("가깝다, 가까워");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 숨결이 그대로 닿는 거리다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "의 눈을 바라보았다",
        ]);
        await era.printAndWait("사람을 사로잡는, 지금은 조금 취한 그 눈동자를");
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 조금씩 베어 물었다. 초콜릿이 없어지면 이 시간도 사라질 것 같아서",
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          "도 천천히 다가와 나비 같은 입술이 거의 닿을 듯했다…… 아니, 이미 닿았을지도 모른다",
        ]);
        await era.printAndWait("하지만…… 초콜릿의 크기에는 한계가 있다");
        await era.printAndWait(
          "온도 때문인지, 아니면 어느 한쪽이 먼저 아슬아슬한 연결을 끊었는지",
        );
        await era.printAndWait([
          "초콜릿은 두 사람의 입에서 녹다가 부러져 각각의 입안으로 들어갔다",
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait("……독은 없다");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 위압에 눌려 수없이 약을 시험해 온 ",
          you.get_colored_name(),
          "이라면 단언할 수 있다. 독이 아니다",
        ]);
        await era.printAndWait("하지만 이 맛…… 이 맛은……");
        era.printButton("「왜…… 돼지고기 덮밥이야……?」", 1);
        await era.input();
        await era.printAndWait("마지막의 이상한 재료를 들었을 때부터 예감은 했다");
        await era.printAndWait("그래도 이 맛은 이해하기 어렵다");
        await era.printAndWait("아니, 애초에 어떻게 이런 초콜릿을 만든 거지……");
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "을(를) 바라보았다. ",
          tachyon.get_colored_name(),
          "은(는) 말이 없었다",
        ]);
        await era.printAndWait("설마…… 무슨 문제라도……");
        era.println();
        await tachyon.say_and_wait("……………풋");
        await tachyon.say_and_wait(
          "하하하하! 이 맛은 뭔가! 이상하군!",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "이(가) 갑자기 웃음을 터뜨렸다",
        ]);
        await era.printAndWait("내가 모르는 웃긴 구석이라도 있나?");
        await era.printAndWait([you.get_colored_name(), "은(는) 잠시 생각했다"]);
        await era.printAndWait("돈가스 덮밥 맛 초콜릿");
        await era.printAndWait("…………생각해 보면 확실히 웃기다");
        era.println();
        await era.printAndWait([
          "어느새 ",
          you.get_colored_name(),
          "도 웃고 있었다",
        ]);
        era.drawLine();
        await tachyon.say_and_wait("zzz……음냐……새근……");
        era.println();
        await era.printAndWait("정말이지…… 실컷 소란을 피우더니 멋대로 잠드는군");
        await era.printAndWait([
          "설마 ",
          tachyon.get_colored_name(),
          "에게는 술버릇 나쁜 주정뱅이의 소질이 있는 건가……?",
        ]);
        era.println();
        await tachyon.say_and_wait("응…… 모르모트…… 고…… 마…… 워…… 새근……");
        era.println();
        await era.printAndWait("………설마");
        await era.printAndWait("부끄러워서 말하지 못하니까, 그래서……");
        await era.printAndWait([
          "아니, 무슨 생각을 하는 거야. ",
          tachyon.get_colored_name(),
          "이라면…… 열에 여덟은 정말 사고……겠지?",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) ",
          tachyon.get_colored_name(),
          "의 입가에 흐른 침을 닦아 주었다",
        ]);
        await era.printAndWait([
          "일단……",
          tachyon.sex,
          "이(가) 깨어나면 확인하자. 적어도 초콜릿에 넣어도 되는 재료와 안 되는 재료 정도는……",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = "잠깐의 휴식";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} plan_b Plan B に入っているか
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      plan_b,
      prix_lat,
      arim_kin,
    ) => {
      const ret = [];
      await tachyon.say_and_wait("여름 합숙, 그리고……");
      if (plan_b) {
        await tachyon.say_and_wait(["그다음은……", prix_lat, "일세"]);
        await tachyon.say_and_wait(
          "그래, 세계의 정점을 마지막 목표로…… 쿠후후, 이보다 어울리는 건 없겠지",
        );
      } else {
        era.println();
        await tachyon.say_and_wait(["그다음은…… 연말의 ", arim_kin, "일세"]);
        await tachyon.say_and_wait(
          "그래, 가장 영향력 있는 레이스에서 이론을 마무리하는 거야…… 쿠후후, 이보다 어울리는 건 없겠지",
        );
      }
      era.printButton("「하지만 그 전에……」", 1);
      era.printButton("「우선 제대로 즐기자」", 2);
      await era.input();
      await era.printAndWait("햇살, 모래사장, 비키니");
      await era.printAndWait([
        "그리고 ",
        tachyon.get_colored_name(),
        "의 수영복",
      ]);
      await era.printAndWait([tachyon.get_colored_name(), "의, 수영복"]);
      era.println();
      if (love >= 50 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          "보는 것만으로…… 충분한가? 직접 손으로 확인해 보고 싶지는 않나?",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 몸을 내밀며 ",
          you.get_colored_name(),
          "의 눈을 바라보았다. 누군가 먼저 나서기를 기다리면서",
        ]);
        era.printButton("손을 뻗어 만진다", 1);
        era.printButton("거절한다", 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 참지 못하고 손을 뻗었다. ",
            tachyon.get_colored_name(),
            "의 가슴, 얇은 천 두 장으로는 도저히 다 담을 수 없는 열매를 향해",
          ]);
          era.println();
          await tachyon.say_and_wait("응……❤");
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 낮게 신음했다. 하지만 눈빛은 거의 달라지지 않았다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 긴장했다. 내 솜씨가 부족한 걸까?",
          ]);
          era.println();
          await era.printAndWait("아무리 애써도 더 세게 하라는 말만 돌아왔다");
          await era.printAndWait([
            "애초에 인간의 힘으로 ",
            tachyon.uma_sex_title,
            "을(를) 만족시키기는 어려운 모양이다……",
          ]);
          await era.printAndWait([
            "그때 알아차렸다. 수영복 아래에 조금 전에는 없었거나 눈에 띄지 않았던 돌기 두 개가 있었다",
          ]);
          await era.printAndWait([
            "시간을 줄여 주는 치트 버튼처럼 보이기도 했다. 나도 모르게 둥근 구체 위의 유일한 돌기를 눌렀다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "잠깐…… 힉!",
            callname,
            "! 거기, 거기는 안 되네!",
          ]);
          era.println();
          await era.printAndWait([
            "조금 전까지는 이래라저래라 지시받았다. 그만두라는 말에 멈출 이유는 없다. ",
            you.get_colored_name(),
            "은(는) 아랑곳하지 않고 뾰족한 끝을 계속 괴롭혔다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "내…… 내가 잘못했네…… 아까 그런 말은 하지 말았어야 했어…… 안 돼, 이제 누르지 말게…… 안 돼, 그러면……",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "의 반응은 ",
            you.get_colored_name(),
            "의 예상보다 훨씬 컸다",
          ]);
          await era.printAndWait([
            "호기심이 생긴 ",
            you.get_colored_name(),
            "은(는) 장난기가 발동해 어떻게 해야 ",
            tachyon.get_colored_name(),
            "이(가) 가장 격하게 반응할지 시험해 보고 싶어졌다",
          ]);
          era.println();
          await tachyon.say_and_wait([callname, "……하아…… 하아……"]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 손의 힘을 조금 풀었다. 위험을 벗어났다고 생각한 모르모트 씨가 방심한 그 순간……",
          ]);
          era.println();
          await tachyon.say_and_wait("힉——————가, 가겠어");
          era.println();
          await era.printAndWait("젖을 짜듯 힘껏 아래로 당겼다");
          await era.printAndWait([
            "온몸이 떨리며 ",
            tachyon.get_colored_name(),
            "은(는) 눈을 뒤집고 앞으로 쓰러져 ",
            you.get_colored_name(),
            " 위를 덮쳤다",
          ]);
          era.println();
          await tachyon.say_and_wait("에헤헤……");
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            tachyon.get_colored_name(),
            "의 등을 쓰다듬어 ",
            tachyon.sex,
            "의 경련을 가라앉혔다",
          ]);
          era.printButton("「한심하네. 유두를 집었을 뿐인데 가 버렸어?」", 1);
          era.printButton(
            `「경주 ${tachyon.uma_sex_title}보다 번식용 암말이 더 어울리겠네」`,
            2,
          );
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            "의 모욕을 듣고 ",
            tachyon.get_colored_name(),
            "은(는) 다시 몸을 떨었다. ",
            tachyon.sex,
            "에게 깔린 ",
            you.get_colored_name(),
            "은(는) ",
            tachyon.sex,
            "의 사타구니에서 약간의 따뜻한 액체가 흘러나오는 걸 느꼈다",
          ]);
        }
      } else if (relation >= 225 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          "무슨 일인가? 그렇게 넋을 놓고 보다니. 쿠후후, 실험을 도와준 보상일세. 더 봐도 좋네",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 몸을 비틀어 가슴의 크기를 한층 강조했다",
        ]);
      } else if (relation > 0 && relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          "흥, 그렇게 노출이 많은 옷이 좋은 건가?…… 아니, 이거라면 공기 저항이 줄어 속도가 빨라질 수도……",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 말을 하다가 다시 자기 생각에 빠져들었다",
        ]);
        await era.printAndWait([
          "수영복이 달리기에 효과가 있을지라……",
          you.get_colored_name(),
          "은(는) ",
          tachyon.sex,
          "의 어울리지 않는 핫팬츠와 샌들을 보았다…… 문제는 수영복이 아닐 텐데, 하고 ",
          you.get_colored_name(),
          "은(는) 생각했다",
        ]);
      } else {
        await tachyon.say_and_wait(
          "……나처럼 이성을 최우선으로 삼을 필요는 없네. 하지만 발정 난 원숭이 같은 눈빛은 조금 거둬 주게",
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  try_drug: (() => {
    const title = "약 시험";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {1|2|3|4|5} effect 薬効。1=火、2=霊視、3=石化、4=発情、5=発光
     * @param {boolean} do_sex 発情の薬効で行為に至るか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      effect,
      do_sex,
    ) => {
      const colors = [
        "무지갯빛",
        "짙은 빨강",
        "짙은 주황",
        "짙은 노랑",
        "짙은 초록",
        "짙은 파랑",
        "짙은 남색",
        "짙은 보라",
        "짙은 회색",
        "짙은 은색",
        "짙은 금색",
        "옅은 빨강",
        "옅은 주황",
        "옅은 노랑",
        "옅은 초록",
        "옅은 파랑",
        "옅은 남색",
        "옅은 보라",
        "옅은 회색",
        "옅은 은색",
        "옅은 금색",
      ];
      await tachyon.say_and_wait([
        "호오, ",
        callname,
        ", 마침 잘 왔네. 오늘의 약일세",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "이(가) 건넨 ",
        get_random_entry(colors),
        " 약을 받은 것은 ",
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([you.get_colored_name(), "은(는) 시키는 대로 마셨다"]);
      switch (effect) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 마시자마자 목이 몹시 간지러워졌다",
          ]);
          await era.printAndWait("기침을 하자 튀어나온 것은 불꽃이었다");
          era.println();
          await tachyon.say_and_wait("이런, 이런. 용의 숨결 약, 효과가 아주 좋군");
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 기쁜 얼굴로 데이터를 기록하고 있었다. 다음에 일어날 일은 예상하지 못했다. 기침에서 튄 불꽃이 ",
            tachyon.sex,
            " 곁의 실험 기록에 떨어진 것이다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "뭔가………… 탄 냄새가…………… 내 실험 데이터가!!??",
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 아직 타지 않은 기록을 구하기 시작했다. ",
            you.get_colored_name(),
            "도 도우려 했지만 목의 간지러움이 가라앉지 않았다",
          ]);
          era.println();
          await tachyon.say_and_wait("콜록!!");
          era.println();
          await era.printAndWait([
            "약효가 사라질 때까지 ",
            tachyon.get_colored_name(),
            "은(는) 자료를 구하느라 계속 뛰어다녔다",
          ]);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 약을 마시자 눈에 비치는 세상이 갑자기 선명해졌다. ",
          ]);
          await era.printAndWait([
            "하지만 ",
            you.get_colored_name(),
            "은(는) 환각제는 아닌지 의심하기 시작했다. 눈앞에 이상한 것들이 보이기 시작했기 때문이다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "호오? 효과가 나타난 모양이군. 이건 ",
            t_call_c,
            "이(가) 말하는 또 하나의 세계를 보는 감각을 바탕으로 만든 영시약일세",
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "은(는) 대체 뭘 만든 거야! 보통 화학의 영역을 넘어섰잖아!?",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "마침 볼 수 있게 됐다면 내 몸도 좀 봐주게",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 그 말에 무의식적으로 ",
            tachyon.get_colored_name(),
            "을(를) 바라보았다",
          ]);
          await era.printAndWait([
            "직후 ",
            you.get_colored_name(),
            "의 의식이 잠시 멈췄다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "어제 ",
            t_call_c,
            "에게 달라붙어 있다가 실수로 ",
            coffee.sex,
            "을(를) 화나게 한 모양일세. 돌아온 뒤부터 몸이 무거워……",
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 보았다. 검은 그림자가 두 손으로 ",
            tachyon.get_colored_name(),
            "의 어깨를 누르고 있었다",
          ]);
          await era.printAndWait([
            "그림자는 ",
            you.get_colored_name(),
            "의 시선을 알아차리고 얼굴 같은 부분에 손가락을 대며 조용히 하라는 신호를 보냈다",
          ]);
          await era.printAndWait([
            "그 뒤 ",
            you.get_colored_name(),
            "은(는) 아무 말도 할 수 없게 되었다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "………이상하군. 정말 아무것도 없나? 왜 이렇게 무겁지",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) ",
            you.get_colored_name(),
            "의 이상을 알아차리지 못한 채 혼잣말을 하며 방을 나갔다",
          ]);
          await era.printAndWait([
            "그제야 ",
            you.get_colored_name(),
            "은(는) 크게 숨을 쉴 수 있었다. 그 검은 그림자는 대체……",
          ]);
          era.println();
          await era.printAndWait([
            "참고로 다음 날 ",
            tachyon.get_colored_name(),
            "은(는) 평소대로 돌아와 있었다. 아마 ",
            coffee.get_colored_name(),
            "의 가벼운 벌이었을 것이다",
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 약을 마시자 몸이 몹시 딱딱해졌다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 두려워졌다. 입과 머리 말고는 온몸이 움직이지 않았다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "이런……… 몸의 충격 내성을 높이는 약을 만들려 했는데, 석화에 가까운 효과가 되어 버렸군………",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "에게는 ",
            tachyon.get_colored_name(),
            "의 실험 후기를 듣고 있을 여유가 없었다",
          ]);
          await era.printAndWait([you.get_colored_name(), "은(는) 다급해졌다"]);
          await era.printAndWait("필사적으로 움직이려 해도 움직이지 않았다");
          await era.printAndWait(
            "이따 운동장 시간 배정 회의가 있다. 오늘 참석하지 못하면 한 달 동안 운동장을 쓸 수 없다",
          );
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 그 심각성을 ",
            tachyon.get_colored_name(),
            "에게 알렸다",
          ]);
          await era.printAndWait([tachyon.sex, "도 큰일이라는 걸 깨달았다"]);
          era.println();
          await tachyon.say_and_wait(
            "운동장에 나가지 못하면 약효를 어떻게 확인하나!?",
          );
          era.println();
          await era.printAndWait([
            "아무튼 이유는 제쳐 두고, 지금은 ",
            you.get_colored_name(),
            "을(를) 회의실로 옮기는 게 먼저다",
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 온 힘을 다해 ",
            you.get_colored_name(),
            "을(를) 안고 회의실로 향했다",
          ]);
          await era.printAndWait([
            "어째서인지 약을 마신 ",
            you.get_colored_name(),
            "은(는) 유난히 무거웠다. ",
            tachyon.get_colored_name(),
            "이(가) ",
            tachyon.uma_sex_title,
            "의 힘으로 들어 올리기조차 버거울 정도였다",
          ]);
          await era.printAndWait([
            "겨우 회의실까지 옮긴 뒤 상태를 들키지 않도록 ",
            tachyon.get_colored_name(),
            "은(는) 곁에 앉아 회의에 함께 참석했다",
          ]);
          era.println();
          await era.printAndWait([
            "그날 이후 어째서인지 학원에는 ",
            tachyon.get_colored_name(),
            "과(와) ",
            you.get_colored_name(),
            "에 대한 소문이 돌았다",
          ]);
          await you.say_as_passer_by_and_wait(
            `지나가던 ${tachyon.uma_sex_title}A`,
            "공주님 안기를 해서 회의에 데려갔대",
          );
          await you.say_as_passer_by_and_wait(
            "지나가던 트레이너 A",
            "회의 내내 곁을 지키고 차까지 따라 줬다지. 완전히 내조더군",
          );
          await you.say_as_passer_by_and_wait(
            `지나가던 ${tachyon.uma_sex_title}B`,
            ["그 ", tachyon.get_colored_name(), "이(가) 사랑에 빠지다니…………"],
          );
          era.println();
          await era.printAndWait("……………왜 그런 소문이 나는 거지");
          await era.printAndWait([
            "그리고 그 소문을 들은 ",
            tachyon.get_colored_name(),
            "의 얼굴이 조금 붉은 건 또 왜일까",
          ]);
          break;
        case 4:
          await era.printAndWait([
            "약은 ",
            you.get_colored_name(),
            "이(가) 마시기도 전에 짙은 분홍빛 안개를 뿜어 ",
            you.get_colored_name(),
            "과(와) ",
            tachyon.get_colored_name(),
            "을(를) 감쌌다",
          ]);
          era.println();
          await tachyon.say_and_wait("콜록! 뭔가!?");
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 고개를 저었다. 약효도 모르는 내가 이유를 알 리 없다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "그저 평범한 정력제인데…… 뭐, 됐네. 창문과 문을 열어 안개를 빼지",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 서둘러 창가로 가서 창문을 열려 했다. 하지만",
          ]);
          era.println();
          await tachyon.say_and_wait("큭, 힘이 들어가지 않아……!");
          era.println();
          await era.printAndWait([
            "그동안 ",
            you.get_colored_name(),
            "은(는) 의자에 앉은 채 움직이지 못했다. 여유가 있어서가 아니다. ",
          ]);
          if (you.sex_code !== 1) {
            await era.printAndWait([
              you.get_colored_name(),
              "의 그곳은 이미 흥건해져 있었기 때문이다",
            ]);
          } else {
            await era.printAndWait([
              you.get_colored_name(),
              "의 하반신에 있는 분신은 이미 꼿꼿이 서 있었기 때문이다",
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            tachyon.get_colored_name(),
            "이(가) 말한 정력제를 떠올렸다. 일반적으로 정력제라면…… 그쪽 약이겠지",
          ]);
          await era.printAndWait([
            "왜 ",
            tachyon.get_colored_name(),
            "이(가) 그런 약을 만드는지는 의문이다. 하지만 지금은 생각할 때가 아니다. 왜냐하면……",
          ]);
          era.println();
          await tachyon.say_and_wait([callname, "……몸이…… 뜨겁군……"]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 하트가 된 두 눈으로 ",
            you.get_colored_name(),
            "을(를) 바라보았다. 약간의 두려움과 그보다 큰 정욕이 섞여 있었다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "의 그런 모습을 보고 ",
            you.get_colored_name(),
            "은(는)……",
          ]);
          if (!do_sex) {
            era.println();
            await era.printAndWait([
              "안 된다. ",
              tachyon.sex,
              "은(는) ",
              you.get_colored_name(),
              "의 담당 ",
              tachyon.uma_sex_title,
              "이다. ",
              you.get_colored_name(),
              "은(는) 그런 짓을 해서는 안 된다",
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 냉정을 유지하며 ",
              tachyon.sex,
              "을(를) 거절했다. 다행히 ",
              tachyon.get_colored_name(),
              "도 어느 정도 침착함을 유지하고 있었다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "괜찮네…… 이 약의 효과는 길어야 한 시간…… 한 시간만 버티면……",
            );
            await era.printAndWait([
              "그 이상은 아무도 말하지 않았다. ",
              you.get_colored_name(),
              "과(와) 힘이 풀려 바닥에 주저앉은 ",
              tachyon.sex,
              "은(는) 말없이 시간이 지나기를 기다렸다",
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 필사적으로 참았다. 하지만 시선은 자꾸 ",
              tachyon.get_colored_name(),
              "에게 향했다",
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) 온몸이 땀투성이였다——",
              you.get_colored_name(),
              "도 마찬가지겠지——가운에 가려 속이 비치지는 않았다",
            ]);
            era.println();
            await era.printAndWait([
              "하지만 빈틈은 있었다. 한 치수 큰 가운이 땀에 젖어 ",
              tachyon.get_colored_name(),
              "의 몸선을 따라 달라붙었다. ",
            ]);
            if (tachyon.sex_code !== 1) {
              await era.printAndWait([
                "둥근 엉덩이와 그 안쪽의 깊은 골부터, 그리 크지는 않지만 탄력 있는 가슴의 봉우리까지 선명하게 ",
                you.get_colored_name(),
                "의 눈에 들어왔다",
              ]);
            }
            era.println();
            await tachyon.say_and_wait([callname, '……']);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "은(는) ",
              you.get_colored_name(),
              "의 시선을 알아차리고 조금 나무라듯 이름을 불렀다. 하지만 정욕에 물든 그 한마디 ",
              callname,
              "에는 색기가 묻어 있었고 ",
              you.get_colored_name(),
              "은(는) 황급히 사과하며 시선을 돌렸다",
            ]);
            era.println();
            await era.printAndWait("참자, 참자, 참자");
            await era.printAndWait([
              "마침내 약효가 옅어지자 ",
              tachyon.get_colored_name(),
              "은(는) 간신히 일어나 오늘은 여기까지라고 말하고 서둘러 트레이너실을 나갔다……",
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 머리를 흔들어 오늘 일을 털어 내려 했다. 하지만 ",
              tachyon.get_colored_name(),
              "의 아름다운 몸은 머릿속에 남아 잊히지 않았다……",
            ]);
            era.println();
            await era.printAndWait([
              "참고로 나중에 ",
              you.get_colored_name(),
              "이(가) 물어보니 그 정력제는 학원 안의 어느 비밀 가게에 납품하는 약이라고 했다. ",
            ]);
            await era.printAndWait([
              "그것이 ",
              tachyon.sex,
              "의 주된 연구 자금 출처인 모양이다. 학원을 돌아다니다 보면 찾을 수 있을지도……?",
            ]);
          }
          break;
        case 5:
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 약을 마시자 온몸에서 빛이 나기 시작했다. ",
            you.get_colored_name(),
            "은(는) 조금 겁이 났지만 ",
            tachyon.get_colored_name(),
            "은(는) 여전히 흥분해 있었다",
          ]);
          era.println();
          await tachyon.say_and_wait("어서 옷을 벗게");
          era.println();
          await era.printAndWait(["이 사람은 무슨 소리를 하는 거야!?"]);
          await era.printAndWait([
            "변태인가!? 트레센에서 유행하는 괴롭힘인가!?",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 황급히 옷을 붙잡았다. 하지만 인간은 ",
            tachyon.uma_sex_title,
            "의 힘을 이길 수 없다. 삼 초 동안 저항한 끝에 잡아당겨진 옷이 찢어졌다",
          ]);
          era.println();
          await era.printAndWait([
            "저항할 수 없는 ",
            you.get_colored_name(),
            "은(는) 눈을 감았다. 피할 수 없다면 즐길 수밖에 없다. 자, 연약한 꽃이라고 생각해서 봐주지는 마라!",
          ]);
          era.println();
          await tachyon.say_and_wait("…………그렇군, 그렇군");
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "이(가) 기다리던 일은 아무리 기다려도 일어나지 않았다. 살며시 눈을 뜨자 ",
            tachyon.get_colored_name(),
            "은(는) ",
            you.get_colored_name(),
            "의 몸을 응시하며 중얼중얼 기록장에 무언가를 쓰고 있었다",
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 자기 몸을 다시 보았다. 확실히 빛이 나고 있었다. 그런데 빛나는 부위에는 일정한 규칙이 있었다. 마치…………",
          ]);
          era.println();
          if (you.race > 0) {
            await tachyon.say_and_wait("구체적으로는 이렇게 움직이고 있었군……");
          } else {
            await tachyon.say_and_wait(
              `인간의 몸은 구체적으로 이렇게 움직이고 있었어…… 하지만……${tachyon.uma_sex_title}과(와)의 차이는…………`,
            );
          }
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            tachyon.get_colored_name(),
            "의 혼잣말을 듣고 이것도 ",
            tachyon.uma_sex_title,
            "의 신비를 탐구하는 실험이라는 걸 깨달았다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 자신의 얄팍한 상상을 조금 부끄러워했다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "좋아, 오늘 관찰은 여기까지일세. 돌아가서 실험하겠네. ",
            callname,
            ", 옷을 입게!",
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "은(는) 기록을 마치고 서둘러 트레이너실을 나갔다. ",
            you.get_colored_name(),
            "만이 남았다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 바닥에 널린, 이제 옷이라고 부를 수도 없는 조각들을 보고 밤을 틈타 돌아갈지 동료에게 옷을 부탁할지 고민했다",
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  second_chance: (() => {
    const title = 'Eureka';
    /**
     * アグネスタキオンを再度育成する選択で発火
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, love) => {
      await era.printAndWait([
        "오늘 ",
        tachyon.get_colored_name(),
        "은(는) 갑자기 들뜬 모습으로 트레이너실에 뛰어들어 왔다",
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        "! 알아냈네(Eureka)…… 알아냈단 말일세(Eureka)!",
      ]);
      era.println();

      await era.printAndWait([
        "묘하게 익숙한 말에 ",
        you.get_colored_name(),
        "은(는) 긴장하며 ",
        tachyon.get_colored_name(),
        "을(를) 바라보았다. 하지만 ",
        tachyon.sex,
        "은(는) 목욕 수건 차림도 아니고 막 씻고 나온 것 같지도 않아 조금 안심했다",
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        "! 찾았네…… 가장 큰 가능성을…… 그래…… 왜 지금까지 알아차리지 못했지",
      ]);
      era.println();

      await era.printAndWait("도대체 무슨 소리일까");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 멍하니 ",
        tachyon.get_colored_name(),
        "을(를) 바라보았다",
      ]);
      await era.printAndWait([
        "어째서인지 ",
        you.get_colored_name(),
        "은(는) 갑자기 낯선 느낌을 받았다",
      ]);
      await era.printAndWait(
        "그토록 함께 시간을 보내고 이제야 첫 삼 년을 넘겼는데",
      );
      await era.printAndWait("서로에 대해서는 속속들이 알고 있을 텐데");
      await era.printAndWait("왜 말로 설명할 수 없는 거리감이 느껴질까");
      era.printButton("「무슨 이야기야?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "호오, 설명하지 않았던가? 정말이지…… 너무 흥분한 나머지 완전히 잊었군",
      );
      await tachyon.say_and_wait("뭐, 간단히 말하자면————평행세계일세");
      await tachyon.say_and_wait(
        "시간을 거대한 강에 비유한다면 그 강에는 다양한 지류가 있지",
      );
      await tachyon.say_and_wait(
        "대부분의 지류는 아주 가늘어서 하나의 강을 이루지는 못하네",
      );
      await tachyon.say_and_wait(
        "하지만…… 어떤 조건에서는 강의 특정 지점에서 충분히 큰 갈래가 생겨나지——그 지점이 바로 이른바 가능성일세",
      );
      await tachyon.say_and_wait(
        "그 갈래도 강이 되어 흐르네. 그렇게 생긴 지류야말로 평행세계라는 존재지",
      );
      era.println();

      await era.printAndWait("평행세계");
      await era.printAndWait("SF나 판타지에서 자주 보는 소재다");
      await era.printAndWait([
        "하지만 ",
        tachyon.get_colored_name(),
        "이(가) 그런 걸 믿을 줄은 몰랐다",
      ]);
      era.printButton("「하지만 결국 사실인지 확인할 수 있는 사람은 없잖아」", 1);
      await era.input();

      await tachyon.say_and_wait("그래…… 맞는 말일세");
      await tachyon.say_and_wait(
        "과학은 신중하게 검증해야 하지…… 가설이 이렇다 해도 평행세계의 존재 여부를 어떻게 증명할 것인가……",
      );
      await tachyon.say_and_wait(
        "어떻게 증명할까…… 역시 세계를 건너면서도 원래 기억이 흐트러지지 않는 사람이 필요하겠군. 그런 사람이 어디에 있으려나…… 정말, 고민되는군",
      );
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        "은(는) 말하면서 몇 번이고 ",
        you.get_colored_name(),
        " 쪽으로 눈길을 보냈다",
      ]);

      era.printButton('「……」', 1);
      era.printButton("「무슨 뜻이야?」", 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait([
          "쿠후후…… 무슨 말을 하는지 잘 알고 있겠지, ",
          callname,
          "……아니면 다른 이름으로 부를까…… 아니, 그만두지. 다른 곳에서는 누구든, 여기서는 내 ",
          callname,
          "일세. 그 밖의 신분은 없어",
        ]);
      } else {
        await tachyon.say_and_wait([
          "호오? 정말 모르는 건가…… 아니면 시치미를 떼는 건가? 뭐, 됐네. 여기서 자네는 내 ",
          callname,
          "일세. 다른 신분은 없어",
        ]);
      }
      era.println();

      await tachyon.say_and_wait(
        "하지만 궁금하군…… 다른 세계, 다른 가능성을 지닌 아그네스 타키온은 어떤 모습일까…… 이미 한계를 넘어선 자도, 제자리에 갇혀 가능성 앞에서 멈춘 자도 있겠지……",
      );
      await tachyon.say_and_wait([
        callname,
        ", 기록은 제대로 남겨 두게. 이번 출장의 연구 과제일세",
      ]);
      era.println();

      await you.say_and_wait("……어?", true);
      await era.printAndWait("잠깐, 무슨 뜻이지");
      await era.printAndWait("아까부터 이해할 수 없는 이야기뿐이다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "은(는) 원래 혼잣말이 많지만 오늘은 도가 지나치다",
      ]);

      era.printButton(`「타키온?」`, 1);
      await era.input();

      await tachyon.say_and_wait("그리고————호오, 시간이 된 모양이군");
      era.println();

      await era.printAndWait("시간?");
      await era.printAndWait("무슨 시간이지");
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 돌아보자 모든 것이 사라져 있었다",
      ]);
      await era.printAndWait("하얀 공백만 남아 있었다");
      await era.printAndWait("창백한 공간 앞에 낡고 짙은 빛깔의 오동나무 문이 하나 있었다");
      await era.printAndWait([
        "어디선가 본 것 같다. 형형색색의 빛을 밟은 ",
        tachyon.uma_sex_title,
        "이(가) 그 문에서 달려 나왔던 광경을",
      ]);
      await era.printAndWait([
        "뒤돌아보자 ",
        tachyon.get_colored_name(),
        "은(는) 어느새 사라지고, 공간에는 ",
        you.get_colored_name(),
        "과(와) 눈앞의 문만 남아 있었다",
      ]);
      await era.printAndWait([
        "공간에는 여전히 ",
        tachyon.get_colored_name(),
        "의 마지막 말이 남아 있었다",
      ]);
      era.println();

      if (love < 50) {
        await tachyon.say_and_wait(
          "실험 데이터는 절대로 잊지 말게!",
        );
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 열기에 들뜬 목소리가 ",
          you.get_colored_name(),
          "의 귓가에 남았다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 연구에 미친 ",
          tachyon.sex,
          "의 얼굴이 보이는 것 같았다",
        ]);
      } else if (love < 90) {
        await tachyon.say_and_wait("실험 데이터는 반드시 가져오게");
        era.println();

        await era.printAndWait([
          tachyon.sex,
          "의 마지막 말에 ",
          you.get_colored_name(),
          "은(는) 잠시 멈췄다",
        ]);
        await era.printAndWait([
          "겉으로는 ",
          tachyon.sex,
          "의 실험 데이터에 대한 열의였다",
        ]);
        await era.printAndWait([
          "하지만 ",
          you.get_colored_name(),
          "은(는) 또 다른 의미를 들었다",
        ]);
        await tachyon.say_and_wait("반드시 돌아오게", true);
      } else {
        await tachyon.say_and_wait([
          "고민이로군…… 그 세계의 나도 분명 ",
          callname,
          "을(를) 좋아하게 되겠지. 연적이 늘어나는 셈이니",
        ]);
        era.println();

        await era.printAndWait("마지막 순간에 그런 사소한 잡담을 하다니");
        await era.printAndWait("왜냐하면…… 그 밖에는 더 설명할 필요가 없으니까");
        await era.printAndWait([
          "실험 데이터? 연인으로서 ",
          tachyon.sex,
          "의 호기심을 채워 주지 않을 이유가 없다",
        ]);
        await era.printAndWait([
          "반드시 돌아오라고? ",
          tachyon.sex,
          "이(가) 말하지 않아도 돌아올 것이다",
        ]);
        await era.printAndWait(
          "마치 잠깐 장을 보러 나가는 평범한 일상처럼",
        );
      }
      era.println();

      await era.printAndWait("그럼……");
      await era.printAndWait([you.get_colored_name(), "은(는) 문을 향해 손을 뻗었다"]);
      await era.printAndWait([
        "이번에는 어떤 ",
        tachyon.get_colored_name(),
        "을(를) 만나게 될까",
      ]);
      if (era.get('cflag:32:育成次数') > 1) {
        const buffer = [
          () =>
            tachyon.say_and_wait([
              "호오?",
              callname,
              ", 또 새로운 가능성을 찾으러 가는 건가?",
            ]),
          () =>
            tachyon.say_and_wait(
              "호오, 돌아왔다면 우선 실험 데이터부터 내놓게!",
            ),
          async () => {
            await tachyon.say_and_wait("그런가…… 나쁘지 않군");
            await tachyon.say_and_wait("그럼 슬슬 시간이 된 건가?");
            await tachyon.say_and_wait(["다음에 또 이야기하지, ", callname]);
          },
        ];
        if (love >= 75) {
          buffer.push(async () => {
            await tachyon.say_and_wait([
              "좋은 아침일세, ",
              callname,
              ". 아니면…… 오랜만이라고 해야 하나?",
            ]);
            await tachyon.say_and_wait(
              "아니, 역시 이렇게 말하지…… 어서 오게❤️",
            );
          });
        }
        await get_random_entry(buffer)();
      }
    };
    f.title = title;
    return f;
  })(),
  be_betray: (() => {
    const title = "그렇게 아그네스 타키온과는 두 번 다시 만나지 못했다";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        "그날, 영문도 모른 채 ",
        tachyon.get_colored_name(),
        "의 연구실에서 쓰러진 뒤. ",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 트레이너로서 담당할 ",
        tachyon.uma_sex_title,
        "을(를) 찾는 것이 순리였다. ",
      ]);
      await era.printAndWait([
        "하지만 그 누구도 ",
        you.get_colored_name(),
        "의 내면에 자리한 갈망을 채워 주지 못했다. ",
      ]);
      await era.printAndWait([
        "가슴속 목소리가 말했다. ",
        tachyon.sex,
        "이(가) 아니다. ",
        tachyon.couple_title,
        "이(가) 아니다. ",
      ]);
      await era.printAndWait([
        "얼마 지나지 않아 ",
        tachyon.uma_sex_title,
        "을(를) 단 한 명도 영입하지 못한 ",
        you.get_colored_name(),
        "은(는) 트레센 학원에서 해고되었다. ",
      ]);
      await era.printAndWait(["하지만 그래도 괜찮다. "]);
      await era.printAndWait([you.get_colored_name(), "은(는) 그렇게 낙관했다. "]);
      await era.printAndWait([
        "맞지 않는 ",
        tachyon.uma_sex_title,
        "과(와) 억지로 함께하느니 그만두면 된다. ",
      ]);

      era.drawLine();
      await era.printAndWait([
        "학원을 떠난 ",
        you.get_colored_name(),
        "은(는) 트레센에서 멀지 않은 곳에 작은 식당을 열었다. ",
      ]);
      await era.printAndWait(["어째서인지 요리 솜씨는 나쁘지 않았다. "]);
      await era.printAndWait([
        "기억을 잃기 전에 무슨 일이 있었는지는 모른다. 하지만 밥을 해 주고 싶었던 소중한 누군가가 있었겠지. 그렇지 않고서야 이 정도 솜씨가 될 리 없다. ",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 이상하리만치 익숙한 솜씨로 가게의 이름을 알렸다. 트레센 주변은 물론 학원 안의 ",
        tachyon.uma_sex_title,
        "들까지 ",
        you.get_colored_name(),
        "의 가게에 드나들었다. ",
      ]);
      await era.printAndWait([
        "기억을 잃기 전에 무슨 일이 있었는지는 모른다. 하지만 밥을 해 주고 싶었던 소중한 누군가가 있었겠지. 그렇지 않고서야 이 정도 솜씨가 될 리 없다. ",
      ]);
      await era.printAndWait([
        "그러니 그 사람이 없어서일 것이다. 주방에 설 때마다 의욕이 솟지 않았다. ",
      ]);
      era.println();

      await era.printAndWait(["그렇게 하루하루가 흘러갔다. "]);
      await era.printAndWait([
        "좋다고까지는 할 수 없다. 그렇다고 나쁘다거나 크게 불만스럽지도 않다. ",
      ]);
      await era.printAndWait(["살아 있다. 그뿐이다. "]);
      era.println();

      await you.say_as_passer_by_and_wait("중계", [
        tachyon.get_colored_name(),
        '！ ',
        tachyon.get_colored_name(),
        "의 복귀 첫 경기! 아리마 기념에서 빛나는 승리를 거머쥐었습니다! ",
      ]);

      era.drawLine();
      await era.printAndWait(["갑자기. "]);
      await era.printAndWait([
        "그 ",
        tachyon.uma_sex_title,
        "은(는) 번개처럼 하늘을 갈랐다. ",
      ]);
      await era.printAndWait([
        "번개처럼 ",
        you.get_colored_name(),
        "의 가슴을 쳤다. ",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ". 그 종잡을 수 없는 ",
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        "그날 연구실에서 헤어진 뒤 한 번도 만나지 못한 ",
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        "가게의 텔레비전에서 연말의 화제인 아리마 기념을 틀어 놓았을 뿐이었다. ",
      ]);
      await era.printAndWait([
        "하지만 상대가 달리기 시작한 순간 어째서인지 눈을 뗄 수 없었다. ",
      ]);
      await era.printAndWait([
        "결승선을 통과한 순간 ",
        you.get_colored_name(),
        "은(는) 깨달았다. 어느새 눈물이 흐르고 있었다. ",
      ]);
      era.println();

      await era.printAndWait([
        "레이스가 끝난 뒤 인터뷰에서 ",
        tachyon.get_colored_name(),
        "은(는) 말했다. 누군가를 찾으려고 복귀했다고. ",
        tachyon.sex,
        "에게 더없이 소중하고 없어서는 안 되는 사람을. ",
      ]);
      await era.printAndWait(["누구일까, 사람들은 수군거렸다. "]);
      await era.printAndWait([
        "누구일까, 머릿속의 목소리가 ",
        you.get_colored_name(),
        "에게 물었다. ",
      ]);
      await era.printAndWait(["머리가 아프다. 머리가 아프다. 머리가 쪼개질 것 같다. "]);
      await era.printAndWait([
        tachyon.sex,
        "이(가) 달리기 시작한 순간 흘린 눈물은 감동 때문이었다. ",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "이(가) 인터뷰하는 동안 그 말을 듣고 흘린 눈물은 그저 아픔 때문이었다. ",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "이(가) 찾는 사람은 누구인가. ",
      ]);
      await era.printAndWait(["나와 무슨 관계가 있는가. "]);
      era.println();

      await era.printAndWait(["하지만 초광속의 입자는 누구를 위해서도 멈추지 않았다. "]);
      await era.printAndWait(["오사카배. "]);
      await era.printAndWait(["텐노상(봄). "]);
      await era.printAndWait(["야스다 기념. "]);
      await era.printAndWait(["타카라즈카 기념. "]);
      await era.printAndWait(["텐노상(가을). "]);
      await era.printAndWait(["재팬컵. "]);
      await era.printAndWait([
        "어느 레이스에서든 ",
        tachyon.get_colored_name(),
        "은(는) 압도적인 대차로, 사람을 매료시키는 달리기로 승리를 거머쥐었다. ",
      ]);
      await era.printAndWait([
        "어느 레이스 뒤에든 ",
        tachyon.sex,
        "은(는) 취재진 앞에서 이야기했다. ",
      ]);
      await era.printAndWait(["어떤 때는 「그 사람」과 보냈던 일상을. "]);
      await era.printAndWait(["어떤 때는 「그 사람」을 향한 참회를. "]);
      await era.printAndWait(["어떤 때는 「그 사람」을 향한 원망을. "]);
      await era.printAndWait([
        "어떤 때는 말하다가 카메라 앞에서 목이 메었다. ",
      ]);
      era.println();

      await era.printAndWait([
        "어느 레이스든 ",
        you.get_colored_name(),
        "은(는) 누구보다 열렬히 지켜보았다. ",
      ]);
      await era.printAndWait([
        "레이스가 끝나고 ",
        tachyon.sex,
        "의 인터뷰를 들을 때마다 ",
        you.get_colored_name(),
        "의 두통은 ",
        you.get_colored_name(),
        "에게 다음에는 절대 보지 않겠다고, 적어도 인터뷰는 넘기겠다고 다짐하게 했다. ",
      ]);
      await era.printAndWait(["하지만 단 한 번도 지키지 못했다. "]);
      await era.printAndWait(["머리가 부풀어 오르는 듯한 통증. "], {
        color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
      });
      await era.printAndWait(["파도처럼 밀려오는 통증. "], {
        color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
      });
      await era.printAndWait(["둔한 통증. "], {
        color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
      });
      await era.printAndWait(["간헐적인 통증. "], {
        color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
      });
      await era.printAndWait(["찌르는 듯한 통증. "], {
        color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
      });
      await era.printAndWait(["극심한 통증. "], {
        color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
      });
      await era.printAndWait([
        "아플 때마다 ",
        you.get_colored_name(),
        "은(는) 느꼈다. ",
      ]);
      await era.printAndWait(["가까워졌다. 이제 곧이다. "]);
      await era.printAndWait([
        "통증이 기억을 덮은 장막을 한 겹씩 벗겨 내는 것 같았다. ",
      ]);

      era.drawLine();
      await era.printAndWait(["마침내 마지막 아리마 기념. "]);
      era.println();

      await you.say_as_passer_by_and_wait("중계", [
        tachyon.get_colored_name(),
        "! 아리마 기념 연패, 연간 무패! ",
        tachyon.get_colored_name(),
        "! 마지막 승리를 거머쥐었습니다! ",
      ]);
      era.println();

      await era.printAndWait(["아아. "]);
      await era.printAndWait(["그 달리기를 본 순간. "]);
      await era.printAndWait(["온몸의 힘이 빠져나간 것 같았다. "]);
      await era.printAndWait(["이것이다. 줄곧 추구해 왔던 것. "]);
      await era.printAndWait([
        "이것이다. 줄곧 「",
        tachyon.sex,
        "」와 함께 추구해 왔던 것. ",
      ]);
      await era.printAndWait(["한계…… 아니, 한계를 뛰어넘은 완벽한 달리기. "]);
      era.println();

      await era.printAndWait([
        "텔레비전에서는 레이스가 끝나고 경기 전 인터뷰가 다시 나오기 시작했다. ",
      ]);
      era.println();

      await era.printAndWait(
        "(기자 A 「아리마 기념 뒤에 은퇴를 발표하실 건가요?」)",
      );
      await tachyon.used_to_say_and_wait([
        "그래…… 이렇게 해도 ",
        you.sex,
        "을(를) 찾을 수 없다면…… 방법을 바꿔야겠지. ",
      ]);
      await tachyon.used_to_say_and_wait([
        "이제 은퇴하고 경기장을 떠날 생각일세. 그다음에는…… 쿠후후, 모르겠군…… 일 년? 십 년? 아니면…… 평생? 아무래도 좋네. ",
        you.sex,
        "을(를) 찾을 때까지 포기하지 않겠어. ",
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), "이(가) 은퇴한다고? "]);
      await era.printAndWait(["경기장을 떠나 「그 사람」을 찾는다고……… 「누구」를? "]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 발이 움직이기 시작했다. 지금 당장 트레센 학원에 가서 ",
        tachyon.sex,
        "이(가) 떠나기 전에 찾고, 만나고, 그리고……",
      ]);
      await era.printAndWait(["어느새 다시 머리가 아팠다. "]);
      era.println();

      await era.printAndWait("??? 「아파……」", {
        color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
      });
      await era.printAndWait("??? 「무서워……」", {
        color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
      });
      await era.printAndWait("??? 「도와줘……」", {
        color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
      });
      await era.printAndWait("??? 「도와줘, 모르모트 군!」", {
        color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
      });
      await era.printAndWait("??? 「모르모트 군, 어디에 있나?」", {
        color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
      });
      await era.printAndWait("??? 「모르모트 군? 버리지 말게……」", {
        color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
      });
      await era.printAndWait("??? 「내 곁으로 돌아와 주게……」", {
        color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
      });
      await era.printAndWait("??? 「부탁이야, 돌아와 줘……」", {
        color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
      });
      await era.printAndWait("??? 「자네가 없으면 안 돼!」", {
        color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
      });
      era.println();

      await era.printAndWait([
        { color: tachyon.color, content: "두통" },
        "의 정체가 드러났다. ",
      ]);
      await era.printAndWait(["수많은 목소리가 귓가에서 울고 외치기를 멈추지 않았다. "]);
      await era.printAndWait(["누구지. "]);
      await era.printAndWait(["누가 울고 있지. "]);
      await era.printAndWait(["누가 외치고 있지. "]);
      await era.printAndWait(["「모르모트 군」…………누구지. "]);
      await era.printAndWait(["발걸음이 멈췄다. "]);
      await era.printAndWait(["두 다리가 떨리고 온몸이 차가워졌다. "]);
      await era.printAndWait(["나는 두려워하고 있다…… 무엇을. "]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "과(와) 마주하는 것을. ",
      ]);
      await era.printAndWait(["진실을 아는 것을. "]);
      await era.printAndWait(["내가 어떤 사람이었는지 아는 것을. "]);
      era.println();

      await era.printAndWait(['—————————']);
      await era.printAndWait(['——————']);
      await era.printAndWait(['—————']);
      era.println();

      await era.printAndWait([
        "결국 ",
        you.get_colored_name(),
        "은(는) 한 걸음도 움직이지 않았다. ",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 두 번 다시 ",
        tachyon.get_colored_name(),
        "을(를) 만나지 못했다. ",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 머리도 더는 아프지 않았다. ",
      ]);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = "멈춘 시계";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} plan_b Plan B に入っているか
     */
    const f = async (tachyon, you, t_call_c, plan_b) => {
      await tachyon.say_and_wait("일어나게");
      await tachyon.say_and_wait("일어나게");
      await tachyon.say_and_wait("부탁이야…… 눈을 떠 주게");
      era.drawLine();
      await era.printAndWait("나는 누구지");
      era.println();
      await tachyon.say_and_wait(
        "자네는…… 모르모트 군. 내 전속 트레이너일세",
      );
      era.println();
      await era.printAndWait("……당신은 누구지");
      era.println();
      await tachyon.say_and_wait([
        "……나는 ",
        tachyon.get_colored_name(),
        ". 자네의 담당 ",
        tachyon.uma_sex_title,
        "일세",
      ]);
      await era.printAndWait('…………');
      era.println();
      await tachyon.say_and_wait("……기억하나?");
      await era.printAndWait('…………');
      await tachyon.say_and_wait([
        "안 돼…… 말없이 있지 말게. 나를 기억하지? 기억하나? 여기는 트레센 학원의 우리 연구실이야. 저쪽은 ",
        t_call_c,
        "의 영역이고……",
      ]);
      era.println();
      if (plan_b) {
        await era.printAndWait("……미안해");
        era.println();
        await era.printAndWait([you.get_colored_name(), "은(는) 고개를 저었다"]);
        await era.printAndWait([
          "눈앞의 ",
          tachyon.teen_sex_title,
          "……어째서인지 낯익다",
        ]);
        await era.printAndWait("하지만 나는 정말 모른다");
        era.println();
        await tachyon.say_and_wait(
          "……괜찮네. 기억 상실도 하나의…… 하나의 가능성이야…… 떠올리면 그만이지",
        );
        era.println();
        await era.printAndWait("……가능성");
        await era.printAndWait("그 말에 진흙 속에서 무언가 번뜩인 것 같았다");
        await era.printAndWait("하지만……");
        await era.printAndWait("번뜩임은 언제나 한순간뿐이다");
        era.println();
        await era.printAndWait("모르겠다");
        await era.printAndWait("생각할수록 머릿속의 빈칸만 늘어난다");
        await era.printAndWait("그래도 떠올려야 한다");
        await era.printAndWait("조금 전의 번뜩임에 다시 닿을 수 있도록");
        await era.printAndWait("이유는 단 하나다");
        await era.printAndWait([
          "눈앞의 ",
          tachyon.get_colored_name(),
          "이라는 이름의 ",
          tachyon.teen_sex_title,
          "을(를) 모른다",
        ]);
        await era.printAndWait([
          "하지만 무의식이 외친다. ",
          tachyon.sex,
          "에게 상처를 줘서는 안 된다. ",
          tachyon.sex,
          "을(를) 슬프게 해서는 안 된다",
        ]);
        era.println();
        await era.printAndWait([
          "그래서 ",
          tachyon.sex,
          "이(가) 주변을 둘러보며 기억을 떠올려 보자고 했을 때",
        ]);
        await era.printAndWait([you.get_colored_name(), "은(는) 거절하지 않았다"]);
        await era.printAndWait([
          tachyon.sex,
          "을(를) 따라 학원(",
          tachyon.sex,
          "의 말로는 그렇다)을 걸었을 뿐이다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "모르모트 군…… 보게. 여기가 운동장일세. 우리가 만난 곳이지",
        );
        era.println();
        await era.printAndWait("만남……인가");
        era.println();
        await tachyon.say_and_wait(
          "그래. 그때 나는 자네를 제대로 보지도 않았지만…… 자네가 그렇게 말했네",
        );
        era.println();
        await era.printAndWait("그렇구나……");
        await era.printAndWait(
          "그럼 그때의 나는 타키온의 달리기에 매료됐겠네",
        );
        era.println();
        await tachyon.say_and_wait("!……기, 기억났나!");
        era.println();
        await era.printAndWait("……미안해");
        await era.printAndWait(
          "그냥 뭔가 그런 느낌이 들어서…… 타키온이 달리면 분명 아름답겠다고 생각했어",
        );
        era.println();
        await tachyon.say_and_wait(
          "………그래, 몇 번이고 말했지…… 나는 모르겠네. 그냥 달리는 것뿐인데 뭐가 그리 사람을 사로잡는지",
        );
        era.println();
        await era.printAndWait("……아니야");
        await era.printAndWait(
          "다른 사람은 그럴지 몰라도 타키온의 달리기는…… 나를 꼭 매료시킬 거라는 느낌이 들어",
        );
        era.println();
        await tachyon.say_and_wait(
          "……그런가. 그럼 한번 달려 볼까?",
        );
        era.println();
        await era.printAndWait("! 그래도 돼!");
        await era.printAndWait("하지만…… 타키온의 다리는……");
        era.println();
        await tachyon.say_and_wait("……기, 기억하고 있나?");
        era.println();
        await era.printAndWait('……');
        era.println();
        await era.printAndWait("침묵이 가장 확실한 대답이었다");
        await era.printAndWait([
          "여기서 ",
          tachyon.sex,
          "을(를) 속여 기억났다고 말하면",
        ]);
        await era.printAndWait([tachyon.sex, "은(는) 분명 기뻐할 것이다"]);
        await era.printAndWait([tachyon.sex, "을(를) 속여도 괜찮을까"]);
        era.println();
        await era.printAndWait("어째서인지 가슴속 목소리가 다시 크게 외쳤다");
        await era.printAndWait([tachyon.sex, "을(를) 「또」 속이지 마라"]);
        await era.printAndWait("나 자신을 「또」 속이지 마라");
        await era.printAndWait("……왜 「또」일까");
        era.println();
        await tachyon.say_and_wait("……괜찮네. 한 바퀴 달리고 오지");
        await tachyon.say_and_wait(
          "그러면 뭔가 떠오를지도 모르니까",
        );
        era.println();
        await era.printAndWait([tachyon.sex, "은(는) 한 바퀴를 다 달렸다"]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 생각한 대로 마음을 움직이는 달리기였다",
        ]);
        await era.printAndWait("하지만…… 그뿐이었다");
        era.println();
        await era.printAndWait([tachyon.sex, "은(는) 한 바퀴를 마치고 멈추려 했다"]);
        await era.printAndWait([
          "하지만 여전히 멍한 ",
          you.get_colored_name(),
          "의 눈을 보고 ",
          tachyon.sex,
          "은(는) 어째서인지 다시 달리기 시작했다",
        ]);
        await era.printAndWait([
          "멍하니 있는 ",
          you.get_colored_name(),
          "의 앞에서 ",
          tachyon.sex,
          "은(는) 한 바퀴 또 한 바퀴, 날이 저물 때까지 달렸다",
        ]);
        era.println();
        await era.printAndWait("……미안해");
        era.println();
        await tachyon.say_and_wait(
          "아니, 아무것도 아니네…… 그냥 달리고 싶어졌을 뿐이야",
        );
        era.println();
        await era.printAndWait("거짓말이다");
        await era.printAndWait([
          you.get_colored_name(),
          "도 안다. 하지만 지적하지 않았다",
        ]);
        await era.printAndWait("차마 지적할 수 없었다");
        await era.printAndWait([
          "그 ",
          tachyon.teen_sex_title,
          "의 헛된 노력에 담긴 슬픔을",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "……내일도 함께 찾아보지. 반드시, 언젠가는 되찾을 수 있을 테니까",
        );
        era.println();
        await era.printAndWait("그러니 헛수고라는 걸 알아도");
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 거절하는 말을 내뱉을 수 없었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "모르모트 군…… 보게. 평소에는 여기서 실험한다네. 매번 내가 약을 만들고 자네에게 먹이는 거지",
        );
        era.println();
        await era.printAndWait("어…… 그거 실험 대상이라는 뜻 아니야?");
        era.println();
        await tachyon.say_and_wait(
          "당연하지. 모르모트 군이 무슨 뜻이라고 생각했나?",
        );
        era.println();
        await era.printAndWait("……정말 실험동물이라는 뜻이었구나");
        era.println();
        await tachyon.say_and_wait(
          "……그러니 조만간 연구하겠네. 기억을 되돌리는 약을…… 도와주겠지?",
        );
        era.println();
        await era.printAndWait("……물론이지");
        era.drawLine();
        await tachyon.say_and_wait([
          "모르모트 군…… 저쪽은 ",
          t_call_c,
          "의 영역일세. 조심하게. 함부로 손대면 사고가 나니까……",
        ]);
        era.println();
        await era.printAndWait("어……?");
        await era.printAndWait("……아무 일도 안 일어나는데");
        era.println();
        await tachyon.say_and_wait(
          "응? 그럴 리가…… 나도 해 보지…… 아아! 연구 자료가 타고 있네!",
        );
        era.drawLine();
        await tachyon.say_and_wait(
          "모르모트 군, 홍차 우리는 법은 기억하나?",
        );
        era.println();
        await era.printAndWait("물론이지. 홍차 정도는 만들 수 있어");
        era.println();
        await tachyon.say_and_wait("쳇…… 이래서는 전혀 안 되겠군");
        era.println();
        await era.printAndWait("어?");
        era.println();
        await tachyon.say_and_wait("홍차와 설탕의 비율은 적어도 1 대 1이어야 하네!");
        era.println();
        await era.printAndWait("너무 달잖아!?");
        era.drawLine();
        await era.printAndWait(
          "타키온…… 기억을 잃기 전의 나와는 어떤 사이였어",
        );
        era.println();
        await tachyon.say_and_wait("……무슨 일인가? 뭔가 떠올랐나?");
        await era.printAndWait([
          "……아니. 그냥 이야기를 듣고 있으니 트레이너와 ",
          tachyon.uma_sex_title,
          ", 혹은 실험자와 실험동물만으로는 설명이 부족한 것 같아서",
        ]);
        era.println();
        await tachyon.say_and_wait("…………사실은 연인일세");
        await era.printAndWait("정말이야?");
        era.println();
        await tachyon.say_and_wait([
          "……그래. 아주 사이좋은 연인이었지. 매일 붙어 다니며 어찌나 달콤하게 굴었던지 ",
          t_call_c,
          "도 ",
          tachyon.sex,
          "도 질려 할 정도였네",
        ]);
        await era.printAndWait("…………미안해");
        era.println();
        await tachyon.say_and_wait("사과할 것 없네");
        await era.printAndWait("만약…… 기억이 돌아오면");
        era.println();
        await tachyon.say_and_wait(
          "……무슨 말을 하는 건가. 기억이 돌아오면이 아니야. 아직 떠올리지 못했을 뿐일세…… 반드시, 반드시 떠올릴 수 있어",
        );
        await era.printAndWait("……그렇겠지. 고마워, 타키온");
        era.drawLine();
        await tachyon.say_and_wait(
          "보게. 여기가 상점가일세…… 평소에 쓰는 실험 기구는 여기서 산다네",
        );
        era.println();
        await era.printAndWait("……저기, 타키온");
        era.println();
        await tachyon.say_and_wait("응? 무슨 일인가?");
        era.println();
        await era.printAndWait(
          "……왜 주변 사람들이 유령이라도 본 듯이 우리를 쳐다보는 거야",
        );
        era.println();
        await tachyon.say_and_wait("그런가? 지난달 실험 때문일지도 모르겠군");
        era.println();
        await era.printAndWait("……지난달?");
        era.println();
        await tachyon.say_and_wait(
          "그래. 그때 실험 때문에 거리를 핏빛으로 물들여 버렸거든",
        );
        era.println();
        await era.printAndWait("…………타키온은 위험한 사람이야?");
        era.println();
        await tachyon.say_and_wait([
          "실례로군. 나는 결백하고 풋풋한 미모의 ",
          tachyon.teen_sex_title,
          "일세",
        ]);
        await tachyon.say_and_wait(
          "모르모트 군이 곁에 없으면 폭주하는 지구 최종 병기가 될 뿐이지",
        );
        era.println();
        await era.printAndWait("무섭잖아!");
        era.println();
        await tachyon.say_and_wait(
          "……그러니 이제 떠나지 말게. 알겠나?",
        );
        era.println();
        await era.printAndWait("…………그래");
        era.drawLine();
        await tachyon.say_and_wait(
          "……모르모트 군. 자네는 나를 원망하지 않나?",
        );
        era.println();
        await era.printAndWait("왜?");
        era.println();
        await tachyon.say_and_wait(
          "나일세. 자네 인생을 여기에 묶어 놓은 건. 만약……",
        );
        era.println();
        await era.printAndWait("……왜?");
        await era.printAndWait("원망해야 한다면 네 쪽이 아닐까");
        await era.printAndWait(
          "기억도 없는 내게…… 네 사랑을 받을 자격이 있을까",
        );
        era.println();
        await tachyon.say_and_wait("! 아니야…… 그렇지 않아!");
        await tachyon.say_and_wait(
          "반드시 기억해 낼 수 있네……! 그러니, 그러니…… 그런 말은 하지 말게……",
        );
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "과(와) 모르모트 군의 발걸음은 예전에 다녔던 모든 곳에 닿았다",
        ]);
        await era.printAndWait("운동장, 경기장, 강가, 신사");
        await era.printAndWait("끝까지 모르모트 군의 기억은 돌아오지 않았다");
        await era.printAndWait("하지만 두 사람은 슬퍼하지 않았다");
        await era.printAndWait(
          "그곳에 가장 아름다운 추억을 새로 남겼으니까",
        );
        era.println();
        await tachyon.say_and_wait("……이런 이야기의 결말, 마음에 드나?");
        era.println();
        await era.printAndWait("……그래, 좋은 이야기야");
        era.println();
        await tachyon.say_and_wait("……모르모트 군");
        era.println();
        await era.printAndWait("이제 됐어. 이걸로 충분해");
        await era.printAndWait("나는…… 이제 죽을 거야");
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait("타키온…… 고마워");
        await era.printAndWait("짧은 인생이었어");
        await era.printAndWait("그래도 그동안 행복했어");
        await era.printAndWait("과거를 기억하지 못해도…… 당당하게 말할 수 있어");
        await era.printAndWait(
          "타키온을 만난 것…… 그게 내 인생에서 가장 아름다운 일이야",
        );
        await era.printAndWait("그러니 미안해");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "과(와) 모르모트 군의 이야기는…… 여기서 끝이야",
        ]);
        era.println();
        await tachyon.say_and_wait("자네가 원한다면……");
        await era.printAndWait("……미안해");
        await era.printAndWait("하지만 이제 네 발목을 잡는 건 그만두고 싶어");
        await era.printAndWait("이야기는 여기서 끝내자");
      } else {
        await era.printAndWait("미안해…… 정말 기억이 안 나");
        era.println();
        await tachyon.say_and_wait("모르……");
        era.printButton("「——물론, 거짓말이야!」", 1);
        await era.input();
        await tachyon.say_and_wait("…………뭐?");
        era.printButton(
          "「무슨 생각을 하는 거야. 타키온을 잊을 리가 없잖아?」",
          1,
        );
        await era.input();
        await tachyon.say_and_wait('…………');

        era.printButton("「……어? 타키온?」", 1);
        await era.input();
        await era.printAndWait("타키온은 갑자기 입을 다물고 고개를 숙였다");
        await era.printAndWait("갑자기 타키온이 당신의 몸을 붙잡았다");
        era.println();
        await tachyon.say_and_wait(
          "자네는……! 내가 얼마나 걱정했는지 아는가!",
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "은(는) 고개를 들지 않았다. 하지만 바닥에 떨어진 물방울이 말해 주었다————",
          tachyon.sex,
          "은(는) 울고 있었다",
        ]);
        era.printButton("「타키온?」", 1);
        await era.input();
        await tachyon.say_and_wait(
          "안 돼…… 이제 속이지 말게. 부탁이야, 알겠지? 정말 무서워…… 잃고 싶지 않아……",
        );
        era.printButton("「…………알았어. 미안해」", 1);
        await era.input();
        await era.printAndWait("미안해");
        await era.printAndWait("정말 미안해");
        await era.printAndWait([
          "무슨 일이 있었는지는 모른다. 하지만 또 ",
          tachyon.sex,
          "을(를) 속였다",
        ]);
        await era.printAndWait([
          "속였다——눈앞의 ",
          tachyon.get_colored_name(),
          "이라는 이름을 가진 낯선 ",
          tachyon.uma_sex_title,
          "을(를)",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "모르모트 군…… 기억하나? 예전에 무슨 일이 있었는지",
        );
        era.println();
        await era.printAndWait("이 질문에는…… 답해도 괜찮겠지");
        await era.printAndWait([you.get_colored_name(), "은(는) 고개를 저었다"]);
        await era.printAndWait("솔직히 아무것도 모른다");
        await era.printAndWait([
          "여기가 어디인지, 눈앞의 ",
          tachyon.teen_sex_title,
          "은(는) 누구인지",
        ]);
        await era.printAndWait("전부 알 수 없다");
        await era.printAndWait("하지만 한 가지만은 가슴속에 박혀 움직이지 않는다");
        await era.printAndWait([tachyon.sex, "을(를) 슬프게 하고 싶지 않다"]);
        await era.printAndWait([tachyon.sex, "을(를) 괴롭게 하고 싶지 않다"]);
        await era.printAndWait("그것을 위해서라면 거짓말로 과거를 덮어도 좋다");
        era.println();
        await tachyon.say_and_wait(
          "……아무것도 아니네. 이제 됐어. 자네는 눈을 떴잖나…… 그걸로 충분하네",
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "은(는) 자세히 설명할 생각이 없는 듯했다",
        ]);
        await era.printAndWait("그렇다면 어쩔 수 없다");

        era.printButton("「그러고 보니, 지금은————」", 1);
        await era.input();
        await tachyon.say_and_wait(
          "모르모트 군, 피곤하겠지. 나머지는 내일 이야기하세",
        );
        era.println();
        await era.printAndWait([
          "지금 시각을 물으려던 참에 ",
          tachyon.sex,
          "이(가) 황급히 화제를 돌렸다",
        ]);
        await era.printAndWait("과거의 기억은 없어도 사람으로서 상식은 있다");
        await era.printAndWait([
          tachyon.sex,
          "의 얼굴을 보면 ",
          tachyon.sex,
          "은(는) 이 질문에 답하고 싶지 않은 것이다",
        ]);
        await era.printAndWait("……그렇다면 묻지 않겠다");
        await era.printAndWait([
          "이 질문 때문에 ",
          tachyon.sex,
          "이(가) 저렇게 당황한 얼굴을 한다면",
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          "자, 모르모트 군. 눈을 떴으니 가장 먼저 해야 할 일은 알고 있겠지?",
        );
        await you.say_as_passer_by_and_wait("모르모트", "……뭔데?");
        await tachyon.say_and_wait(
          "당연히 밥이지! 밥! 배고파 죽겠네. 모르모트 군, 어서 뭐라도 만들어 오게!",
        );
        await you.say_as_passer_by_and_wait("모르모트", "…………알았어");
        era.println();
        await you.say_as_passer_by_and_wait("모르모트", "맛은…… 어때?");
        await tachyon.say_and_wait("………음");
        await tachyon.say_and_wait("우웩…… 맛없군……");
        await tachyon.say_and_wait(
          "어째서 이렇게 맛없는 건가…… 모르모트 군, 자네……",
        );
        await you.say_as_passer_by_and_wait("모르모트", '！？');
        await tachyon.say_and_wait(
          "분명…… 몸이 아직 완전히 회복되지 않아서겠지. 그토록 오래 잠들어 있었으니",
        );
        await tachyon.say_and_wait(
          "이번에는 넘어가 주겠네. 하지만 어서 원래대로 돌아오게나",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……아하하, 미안해",
        );
        era.drawLine();
        await tachyon.say_and_wait(
          "그럼…… 다음은 운동장에서 트레이닝일세",
        );
        await you.say_as_passer_by_and_wait("모르모트", '…………');
        await tachyon.say_and_wait("………모르모트 군?");
        await you.say_as_passer_by_and_wait("모르모트", "아, 왜……");
        await tachyon.say_and_wait(
          "놀라지 않는 건가? 이 내가 먼저 트레이닝에 가겠다고 했는데?",
        );
        await you.say_as_passer_by_and_wait("모르모트", "……어");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……나도 모르게 또 땡땡이칠 생각인 줄 알았어",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "타키온이 정말로 트레이닝에 간다고!?",
        );
        await tachyon.say_and_wait("아니, 그건 너무 과하군");
        await you.say_as_passer_by_and_wait("모르모트", "아하하…… 그래?");
        era.drawLine();
        await you.say_as_passer_by_and_wait("모르모트", "상점가……?");
        await tachyon.say_and_wait(
          "그래. 실험 기구가 부족해지고 있거든. 같이 가 주게",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "응, 좋아. 물론이지",
        );
        await tachyon.say_and_wait(
          "모르모트 군? 어디로 가는 건가? 상점가는 그쪽이 아니라네",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……아, 아니, 아무것도 아니야. 잠깐 가져올 게 있었을 뿐이야",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "생각해 보니 별일 아니었어. 아하하하",
        );
        await tachyon.say_and_wait("……이상하군");
        era.println();
        await tachyon.say_and_wait("흥～흥흥흥");
        await you.say_as_passer_by_and_wait("모르모트", "……저기, 타키온?");
        await tachyon.say_and_wait("응?");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "왜…… 상점가 사람들이 너를 보는 눈이 묘하지",
        );
        await tachyon.say_and_wait(
          "……그, 그런가? 기분 탓일세, 모르모트 군",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "아니, 분명 그래. 위험인물이라도 보는 것처럼……",
        );
        await tachyon.say_and_wait("잘못 본 걸세");
        await you.say_as_passer_by_and_wait("모르모트", "하지만");
        await tachyon.say_and_wait("잘못 본 걸세");
        await you.say_as_passer_by_and_wait("모르모트", "……알았어");
        era.drawLine();
        await tachyon.say_and_wait(
          "……모르모트 군. 지금 손에 든 것을 조심스럽게 내려놓게",
        );
        await you.say_as_passer_by_and_wait("모르모트", "어…… 왜?");
        await tachyon.say_and_wait([
          "왜라니, 그건 ",
          t_call_c,
          "의 물건 아닌가?",
        ]);
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "어…… 그래도 조금 만지는 정도는 괜찮겠지",
        );
        await tachyon.say_and_wait(
          "그럴 리가! 지난번에 내가 연구 자료를 살짝 건드렸을 뿐인데 순식간에 타올랐다네!",
        );
        await you.say_as_passer_by_and_wait("모르모트", "하지만……");
        await tachyon.say_and_wait('………');
        await you.say_as_passer_by_and_wait("모르모트", '…………');
        await tachyon.say_and_wait(
          "그럼 나도 해 보겠네……… 으아아! 타고 있잖나! 어서 자료를 구하게, 아아아!",
        );
        era.drawLine();
        await tachyon.say_and_wait("이봐, 모르모트 군");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "응? 타키온, 왜?",
        );
        await tachyon.say_and_wait(
          "그러고 보니 눈을 뜬 뒤로 한 번도 나와 애정을 나누지 않았지 않나?",
        );
        await you.say_as_passer_by_and_wait("모르모트", "……어?");
        await tachyon.say_and_wait(
          "연인을 내버려 두다니. 조금 전까지는 아직 회복되지 않아서라고 생각했지만…… 몸 검사도 문제없었으니 슬슬 제대로 어리광을 부려 보게나?",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "잠깐, 타키온은 아직 학생이잖아",
        );
        await tachyon.say_and_wait("그래, 무슨 문제라도 있나?");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "크게 문제지!? 윤리라든가……",
        );
        await tachyon.say_and_wait(
          "……갑자기 뭘 그렇게 흥분하나. 처음에는 자네 쪽에서 그렇게 적극적이었으면서♡",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "…예전의 나는 그렇게 최악이었나",
        );
        await tachyon.say_and_wait("? 모르모트 군, 지금 무슨 말 했나?");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……아니, 아무것도 아니야",
        );
        await tachyon.say_and_wait("그럼 어서. 제대로 애정을 나누도록 하지♡");
        era.drawLine();
        await tachyon.say_and_wait(
          "오오, 이번 도시락은 훌륭하군! 모르모트 군! 드디어 예전 실력으로 돌아왔네!",
        );
        await you.say_as_passer_by_and_wait("모르모트", "그…… 그래?");
        await tachyon.say_and_wait(
          "그렇게 필사적으로 재활한 보람이 있군!",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "응…………요리책 덕분이기도 하지",
        );
        await tachyon.say_and_wait(
          "정말이지…… 이런 맛은 오랜만이군………… 정말 오랜만이야………",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……타키온, 하나 물어봐도 돼?",
        );
        await tachyon.say_and_wait("응?");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "나는 대체…… 얼마나 오래 잠들어 있었어",
        );
        await tachyon.say_and_wait('……………');
        await tachyon.say_and_wait("……………년일세");
        await you.say_as_passer_by_and_wait("모르모트", '…………');
        await tachyon.say_and_wait("……모르모트 군?");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "미안해…… 그렇게 오랫동안 넌…… 외로웠겠지",
        );
        await tachyon.say_and_wait('！');
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……이제 돌아왔어. 이제 괜찮아. 더는, 이제 더는……",
        );
        await tachyon.say_and_wait('……');
        await tachyon.say_and_wait(
          "모르모트 군…… 정말…… 정말, 더는 버티지 못할 뻔했네……",
        );
        await tachyon.say_and_wait(
          "만약…… 눈을 뜨지 않았다면…… 만약…… 나를 완전히 잊었다면…… 만약…… 만약……",
        );
        await tachyon.say_and_wait(
          "정말…… 무서웠어…… 악몽 같았네…… 몇 년이고 이어진 악몽……",
        );
        await you.say_as_passer_by_and_wait("모르모트", '……………');
        await tachyon.say_and_wait(
          "하지만…… 돌아왔지. 자네는 돌아왔어",
        );
        await tachyon.say_and_wait(
          "약속해 주게…… 이번에는 더 이상 떠나지 않겠다고…… 알겠나?",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "……그래, 이제 떠나지 않아",
        );
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "그래서…… 그날은 대체……",
        );
        await tachyon.say_and_wait(
          "……그날 자네는 상점가에서…… 나는 아주 잠깐 자리를 비웠을 뿐이야. 그런데…… 팬이라고 주장하는 자가 덤벼들어서…… 그 뒤에는……",
        );
        await tachyon.say_and_wait("……그때 조금만 더 일찍 돌아왔더라면, ");
        await tachyon.say_and_wait("아니, 계속 곁에 있었더라면……");
        await tachyon.say_and_wait(
          "절대로 그런 일은 없었을 텐데…… 미안하네……",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "괜찮아…… 지금은 무사하잖아?",
        );
        await tachyon.say_and_wait(
          "하지만…… 그동안 자네의 인생은…… 몇 년이나…………원망하지 않나?",
        );
        await tachyon.say_and_wait(
          "내가 원인이 아니었다면…… 내가 담당이 아니었다면…… 자네가 이런 일을 겪지 않았을지도 모르는데",
        );
        await you.say_as_passer_by_and_wait("모르모트", "왜 원망해야 해");
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "타키온 탓이 아니야…… 그런데도 타키온은 나를 구해 줬잖아",
        );
        await you.say_as_passer_by_and_wait(
          "모르모트",
          "고마워해도 모자라. 원망할 리 없지",
        );
        await tachyon.say_and_wait(
          "…………그렇군. 자네라면 그렇게 말하겠지",
        );
        await you.say_as_passer_by_and_wait("모르모트", "? 무슨 뜻이야");
        await tachyon.say_and_wait("아니…… 아무것도 아니네");
        era.drawLine();
        await era.printAndWait("이렇게");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "과(와) 모르모트 군의 발걸음은 예전에 다녔던 모든 곳에 닿았다",
        ]);
        await era.printAndWait("운동장, 경기장, 강가, 신사");
        await era.printAndWait(
          "과거를 다시 음미하고, 몇 년 전에 멈춘 시계를 다시 움직이기 위해",
        );
        await era.printAndWait(
          "그동안 잃어버린 세월은 메울 수 없을지도 모른다",
        );
        await era.printAndWait(
          "그래도 두 사람은 자신들만의 새로운 인생을 열심히 만들어 갔다",
        );
        era.println();
        await tachyon.say_and_wait("……이런 이야기의 결말, 마음에 드나?");
        era.println();
        await era.printAndWait("……그래, 좋은 이야기야");
        era.println();
        await tachyon.say_and_wait("……모르모트 군");
        era.println();
        await era.printAndWait("이제 됐어. 이걸로 충분해");
        await era.printAndWait("나는…… 이제 죽을 거야");
        await tachyon.say_and_wait('…………');
        await era.printAndWait("타키온…… 고마워");
        await tachyon.say_and_wait(
          "약속하지 않았나…… 이제 떠나지 않겠다고. 약속했잖나",
        );
        era.println();
        await era.printAndWait("……미안해");
        await era.printAndWait("또 너를 속였다고 생각해 줘");
        await era.printAndWait("그동안 행복했어");
        await era.printAndWait(
          "하지만 이 행복은…… 내 것이 아니야. 「모르모트 군」의 것이지",
        );
        await era.printAndWait(
          "타키온을 만난 것…… 그게 내 인생에서 가장 아름다운 일이야",
        );
        await era.printAndWait("그러니 이제 속이고 싶지 않아");
        await era.printAndWait("그러니 미안해");
        await era.printAndWait("그러니 용서해 줘");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "과(와) 모르모트 군의 이야기는…… 여기서 끝이야",
        ]);
        await tachyon.say_and_wait("자네가 원한다면……");
        era.println();
        await era.printAndWait("……미안해");
        await era.printAndWait("하지만 이제 네 발목을 잡고 싶지 않아");
        await era.printAndWait("모르모트 군은 여기서 끝내자");
      }
      era.println();
      await era.printAndWait("미안해, 타키온. 정말 졸려…… 이제 괜찮을까?");
      await tachyon.say_and_wait("……그래. 편히 쉬게. 곁에 있겠네");
      era.drawLine();
      await tachyon.print_and_wait("모르모트 군은 평온하게 눈을 감았다");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "은(는) 울지 않았다. 왜냐하면…… 처음이 아니었으니까",
      ]);
      era.println();
      await tachyon.print_and_wait("모르모트 군과의 이별은");
      await tachyon.print_and_wait("처음은 그날의 상점가였다");
      await tachyon.print_and_wait("내가 자리를 비우지 않았더라면");
      await tachyon.print_and_wait([
        "억지로라도 ",
        you.sex,
        "을(를) 곁에 붙잡아 뒀더라면",
      ]);
      await tachyon.print_and_wait("만약……");
      await tachyon.print_and_wait("만약 같은 건 없다");
      era.println();
      if (plan_b) {
        await tachyon.print_and_wait("범인의 뼈를 부수고 재로 만들어도");
        await tachyon.print_and_wait("상점가를 새빨갛게 물들여도");
        await tachyon.print_and_wait([you.sex, "은(는) 돌아오지 않았다"]);
        await tachyon.print_and_wait([
          "그 붉은빛으로는 ",
          you.sex,
          "의 배에서 흘러넘친 피를 채울 수 없었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          "은(는) 역시…… 나를 원망하지 않았네",
        ]);
        era.println();
        await tachyon.print_and_wait("내가 이렇게 만들어 버렸는데도");
        await tachyon.print_and_wait(
          "눈앞의 모르모트 군의 얼굴에는 아직 젊음이 가득하다",
        );
        await tachyon.print_and_wait([
          you.sex,
          "은(는) 여기서 떠나서는 안 됐다",
        ]);
        await tachyon.print_and_wait([you.sex, "은(는) 지금 떠나서는 안 됐다"]);
        await tachyon.print_and_wait([
          "그런데도 ",
          tachyon.get_colored_name(),
          " 때문이다",
        ]);
        await tachyon.print_and_wait([
          you.sex,
          "이(가) 잘못된 시간에, 잘못된 장소에서, 잘못된 사람과…… 만나 버렸기 때문이다",
        ]);
      } else {
        await tachyon.print_and_wait("범인의 뼈를 부수고 재로 만들어도");
        await tachyon.print_and_wait(
          "상점가에서 내가 미친 사람처럼 뛰어다녀도",
        );
        await tachyon.print_and_wait([you.sex, "은(는) 돌아오지 않았다"]);
        await tachyon.print_and_wait([
          "응급처치로는 ",
          you.sex,
          "의 배에서 흘러넘친 피를 채울 수 없었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "그토록 오래 속여 왔는데…… 한 번 더 속인들 뭐가 문제인가……",
        );
        era.println();
        await tachyon.print_and_wait("처음부터 알고 있었다");
        await tachyon.print_and_wait([
          you.sex,
          "이면서도 ",
          you.sex,
          "이(가) 아니라는 것을",
        ]);
        await tachyon.print_and_wait(
          "필사적으로 꾸며도 기억을 잃은 사람의 멍한 얼굴은 그리 쉽게 감출 수 없다",
        );
        await tachyon.print_and_wait(
          "하물며…… 그 뒤의 거짓말은 너무나 서툴렀다",
        );
        era.println();
        await tachyon.print_and_wait([
          "하지만……",
          tachyon.get_colored_name(),
          "은(는) 상관없었다",
        ]);
        await tachyon.print_and_wait([you.sex, "이기만 하면 됐다"]);
        await tachyon.print_and_wait(
          "살아 있기만 하면 됐다. 계속 살아 주기만 하면 됐다",
        );
        await tachyon.print_and_wait("기억이 없다고? 그게 무슨 상관인가");
        await tachyon.print_and_wait([
          you.sex,
          "이(가) 계속 살아 준다면 ",
          tachyon.get_colored_name(),
          "은(는) 평생 속아도 좋았다",
        ]);
        await tachyon.print_and_wait("……그런데도");
        await tachyon.print_and_wait([
          "또 똑같았다. 「이번」에도 ",
          you.sex,
          "은(는) 평생에 걸쳐 나를 속였다",
        ]);
        await tachyon.print_and_wait([
          "그런데도 마지막 순간에 딱 한 번 더 ",
          tachyon.get_colored_name(),
          "을(를) 속이는 일은 하지 않았다",
        ]);
      }
      era.println();
      await tachyon.print_and_wait("침대 곁의 홍차를 한 모금 마셨다");
      await tachyon.print_and_wait([
        "직접 만든 홍차는 ",
        you.sex,
        "이(가) 만든 것과 이론상 성분이 완전히 같다",
      ]);
      await tachyon.print_and_wait("몇 년이고 직접 만들어 왔으니까");
      await tachyon.print_and_wait(
        "고심할 수 있는 것, 바꿀 수 있는 것은 이미 최선에 이를 때까지 연구했다",
      );
      await tachyon.print_and_wait("하지만 맛이 다르다");
      await tachyon.print_and_wait(
        "같아지지 않는다. 영원히 같아지지 않는다",
      );
      await tachyon.print_and_wait("오늘의 홍차는 영원히 어제의 맛을 이길 수 없다");
      era.println();
      await tachyon.say_and_wait("————그럼 다음 실험을 시작하겠네");
      era.drawLine();
      await tachyon.print_and_wait("트레센 학원의 지하실");
      era.println();
      await tachyon.say_and_wait("지난번에 여기에 온 건…… 언제였더라");
      era.println();
      await tachyon.print_and_wait("석 달? 다섯 달? 아니면……");
      await tachyon.print_and_wait(
        "「이번」에는 모르모트 군과 얼마나 함께했지?",
      );
      era.println();
      await tachyon.say_and_wait("됐네. 이제 아무래도 좋아");
      era.println();
      await tachyon.print_and_wait("불을 켰다");
      await tachyon.print_and_wait("눈이 빛에 익숙해지기를 기다리자");
      await tachyon.print_and_wait("눈앞에 나타난 것은 수천 개에 이르는 배양조였다");
      era.println();
      await tachyon.print_and_wait([
        "아아, ",
        you.sex,
        "이(가) 알았다면 ",
        you.sex,
        "은(는) 절대로 용서하지 않았겠지",
      ]);
      await tachyon.print_and_wait([
        "하지만……",
        you.sex,
        "은(는) 역시 나를 원망하지 않았다",
      ]);
      await tachyon.print_and_wait("그렇다면 묵인한 셈일세");
      era.println();
      await tachyon.say_and_wait(
        "쉰여섯 번째. 기억 회복의 기미 없음, 신체 이상 없음, 생존 기간 다섯 달……",
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        "이(가) 떠난 날부터 겨우 움직이기 시작한 계획",
      ]);
      await tachyon.print_and_wait("얼마나 스스로를 저주했는지 모른다");
      await tachyon.print_and_wait("왜 이렇게 늦게 알아차렸을까");
      await tachyon.print_and_wait(
        "거품 같은 행복에 취해 연구자로서 최소한의 대비조차 잊었던 걸까?",
      );
      await tachyon.print_and_wait("그래서 이렇게 되었다");
      era.println();
      await tachyon.print_and_wait([
        "한 방울씩, 모래성을 쌓듯 ",
        you.sex,
        "의 몸을 다시 만들어 냈다",
      ]);
      await tachyon.print_and_wait(
        "하지만 모든 것을 다시 만들어도, 형태 없는 것은 다시 만들 수 없었다",
      );
      await tachyon.print_and_wait("인체에서 가장 많은 비밀을 품은 뇌————기억");
      await tachyon.print_and_wait(
        "애초에 있었는지조차 알 수 없는 것의 형태를 어떻게 되찾는단 말인가",
      );
      await tachyon.print_and_wait("이렇게 할 수밖에 없다");
      await tachyon.print_and_wait("몇 번이고 실험하고, 몇 번이고 눈뜨게 하며");
      await tachyon.print_and_wait("몇 번이고…… 기적을 기다린다");
      era.println();
      await tachyon.say_and_wait(
        "주된 실패 원인, 다발성 장기 부전으로 인한 패혈증…… 생존 의지 없음",
      );
      era.println();
      await tachyon.print_and_wait(
        "범인의 진흙 장난으로는 여신님께 영원히 닿을 수 없는 모양이군",
      );
      await tachyon.print_and_wait([
        "그래서 매번 만들어 낸 ",
        you.sex,
        "은(는) 언제나 이렇게 된다",
      ]);
      await tachyon.print_and_wait("길면 반년, 짧으면…… 이 주");
      await tachyon.print_and_wait("때가 되면 반드시 어떤 이유로든 영원한 잠에 든다");
      await tachyon.print_and_wait("……물론");
      await tachyon.print_and_wait(
        "이런 병은 아무리 그래도 보통 사람의 영역이다",
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "의 연구 성과가 있다면",
      ]);
      await tachyon.print_and_wait(
        "목숨을 연장하는 데 삼 년에서 오 년은 아무 문제 없다. 그 이상도…… 가능하다",
      );
      await tachyon.print_and_wait(
        "원한다면 삼 년에서 오 년을 한 번 더, 두 번, 세 번, 네 번이고 영원히 이어 갈 수 있다",
      );
      era.println();
      await tachyon.say_and_wait([you.sex, "은(는) 역시…… 말하지 않았네"]);
      era.println();
      await tachyon.print_and_wait("몇 번을 반복해도");
      await tachyon.print_and_wait("몸을 어떻게 바꾸어도");
      await tachyon.print_and_wait([
        "마지막 순간 ",
        you.sex,
        "의 말은 언제나 대동소이했다",
      ]);
      era.println();
      await tachyon.say_and_wait("이제 끝이야");
      await tachyon.say_and_wait("이제 충분해");
      era.println();
      await tachyon.say_and_wait(
        "웃기지 말게…… 웃기지 말란 말일세!",
      );
      await tachyon.say_and_wait(
        "누가 멋대로 만족해도 된다고 했나! 말하게! 나에게 말해! 살고 싶다고 해! 나와 계속 살고 싶다고 하란 말이야!",
      );
      await tachyon.say_and_wait(
        "기억이 없어도 괜찮네. 평생을 들여 떠올려도 좋아. 말해 줘…… 왜 말하지 않는 거야…… 왜…… 나를 혼자 두는 거야……",
      );
      era.println();
      await tachyon.print_and_wait([
        "만약 ",
        you.sex,
        "이(가) 원망했다면. 자기 목숨을 빼앗은 ",
        tachyon.get_colored_name(),
        "을(를) 원망하고, 죽어도 ",
        tachyon.get_colored_name(),
        "과(와) 살고 싶지 않다고 했다면 받아들일 수 있다",
      ]);
      await tachyon.print_and_wait([
        "정말 그렇다면 ",
        tachyon.get_colored_name(),
        "은(는) 두말없이 ",
        you.sex,
        "의 삶에서 물러나 최소한의 치료만 하러 접촉할 것이다",
      ]);
      await tachyon.print_and_wait([
        "마지막에 아주 조금이라도 망설였다면, 혹은 ",
        tachyon.get_colored_name(),
        "을(를) 향한 아주 작은 혐오라도 보였다면",
      ]);
      await tachyon.print_and_wait([
        "심장이 멈추더라도 마지막 순간에 ",
        you.sex,
        "을(를) 구해 낼 수 있다",
      ]);
      await tachyon.print_and_wait("하지만…… 쉰여섯 번 동안");
      await tachyon.print_and_wait("그런 일은 단 한 번도 없었다");
      era.println();
      await tachyon.print_and_wait("발목을 잡고 싶지 않아");
      await tachyon.print_and_wait("묶어 두고 싶지 않아");
      await tachyon.print_and_wait("모든 것을 잃어도, 목숨도 기억도 잃어도");
      await tachyon.print_and_wait([
        "쉰여섯 번, 매번 ",
        you.sex,
        "이(가) 마지막까지 생각한 것은 ",
        tachyon.get_colored_name(),
        "의 가능성이었다",
      ]);
      era.println();
      await tachyon.print_and_wait([
        "하지만 ",
        tachyon.get_colored_name(),
        "의 가능성은 이미 끝나 있었다",
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "의 시간은 이미 멈춰 있었다",
      ]);
      await tachyon.print_and_wait("그 홍차의 맛은 그 순간부터 고정되어 있었다");
      era.println();
      await tachyon.say_and_wait("쉰일곱 번째, 시작");
      era.println();
      await tachyon.print_and_wait(
        "배양조가 영양액을 배출하고, 그 안의 인영이 풀려났다",
      );
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        "을(를) 끝나게 해서는 안 된다. ",
        you.sex,
        "을(를) 끝나게 두지 않겠다",
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "과(와) 모르모트 군의 이야기는 영원히 계속되어야 한다",
      ]);
      era.println();
      await tachyon.print_and_wait(
        "그렇게 과거를 붙잡고 과거에 붙잡힌 과학자는 새로운 실험을 시작했다",
      );
    };
    f.title = title;
    return f;
  })(),
};
