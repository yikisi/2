/**
 * @file サンデーサイレンス - 日常
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} s_call_c サンデーサイレンスのマンハッタンカフェへの呼び方
   * @param {PrintedSpan} s_call_t サンデーサイレンスのアグネスタキオンへの呼び方
   * @param {PrintedSpan} s_call_m サンデーサイレンスの駿川たづな／ハーヴェストへの呼び方
   */
  good_morning(ss, you, s_call_c, s_call_t, s_call_m) {
    const buffer = [];
    buffer.push(
      () =>
        ss.say('오늘 날씨는 괜찮네. 일정이 있으면 일찍 시작하는 게 좋겠어.'),
      () =>
        ss.say(
          '너는 내가 강해지기 위해 필요한 존재야. 내 기분까지 신경 쓸 필요는 없어.',
        ),
      () =>
        ss.say([
          s_call_c,
          '의 커피가 조금 그립네…… 그런 눈으로 보지 마. ',
          ss.sex,
          '가 내리는 커피는 정말 맛있으니까.',
        ]),
      () => {
        ss.say(
          '최근 학원 근처에 생긴 식당이 맛있더라. 훈련에서 충분한 성과가 나오면 데려가 줄게. 어때?',
        );
        era.print([
          ss.get_colored_name(),
          '은(는) 배를 쓰다듬었다. 아직도 음식 맛을 떠올리는 모양이었다.',
        ]);
      },
      () =>
        ss.say([
          s_call_t,
          '의 약은 어떨까? 대개는 문제를 해결해 주지. 하지만 부작용이나 뒤따르는 문제를 네가 감당할 자신은 있어?',
        ]),
      () =>
        ss.say([
          '목표를 물었어? 이기고 싶어. 레이스 ',
          ss.uma_sex_title,
          '의 전장에서 계속 이기고 싶어. 그뿐이야.',
        ]),
      () => {
        ss.say([
          s_call_m,
          '(이)라…… ',
          ss.sex,
          '는 아주 강해…… 아니, 아무것도 아냐. 잊어버려.',
        ]);
        era.print([
          ss.get_colored_name(),
          '은(는) 고개를 저으며 화제를 돌렸다.',
        ]);
      },
    );
    if (era.get('love:400') === 100) {
      buffer.push(
        () => {
          ss.say('왜일까? 우리는 트레이너와 담당 사이일 뿐인데……');
          ss.say('왜 이제는 너에게서 눈을 뗄 수 없는 걸까.');
          era.print([
            ss.get_colored_name(),
            '은(는) 작은 혼잣말이라고 생각한 모양이지만, ',
            you.get_colored_name(),
            '에게는 들리고 있었다.',
          ]);
        },
        () => {
          ss.say('다리 좀 주물러 줄래? 이것도 트레이너의 일 중 하나잖아……');
          era.print([
            ss.get_colored_name(),
            '는 신발을 벗고 양말에 싸인 작은 발을 내밀었다.',
          ]);
          era.print([
            '말로는 ',
            you.get_colored_name(),
            '에게 다리 마사지만 부탁했지만, ',
            ss.sex,
            '는 눈을 감고 ',
            you.get_colored_name(),
            '이(가) 무엇을 해도 좋다는 듯했다.',
          ]);
        },
      );
    } else if (era.get('love:400') >= 90) {
      buffer.push(
        () => {
          ss.say('추가 훈련 일정이 없다면……');
          ss.say(
            '오늘은 같이 밥 먹으러 가자. 시간은 신경 쓰지 마. 정 늦으면 널 안고 뛰어 돌아오면 되니까.',
          );
          era.print([
            ss.get_colored_name(),
            '은(는) 몸짓으로 설명했다. ',
            ss.sex,
            '는 농담을 하는 것 같지 않았다.',
          ]);
        },
        () => {
          ss.say('미안, 조금 지쳤어. 부축해 줄래? 역시 네 냄새가 제일 안심돼.');
          era.print([
            ss.get_colored_name(),
            '은(는) 그대로 가슴에 기대어 ',
            you.get_colored_name(),
            '의 냄새를 충분히 음미하는 듯했다.',
          ]);
        },
      );
    } else if (era.get('love:400') >= 75) {
      buffer.push(
        () =>
          ss.say('오늘 훈련 끝나면 같이 뭐 마시러 갈래? 걱정 마, 내가 살게.'),
        () => ss.say('좋은 카페를 알고 있어. 추가 보수라고 생각해. 어때?'),
        () =>
          ss.say(
            '서점에 같이 가 줄래? 오늘 새 잡지랑 만화가 나온대. 누군가와 같이 사러 가고 싶어.',
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  select(ss, you, callname) {
    const buffer = [];
    if (era.get('love:400') === 100) {
      buffer.push(() => {
        ss.say(
          `${callname}, 내 모습을 바라봐 줘. 머릿속에 영원히 새겨 둬. 그리고 영원히 내 곁을 떠나지 마.`,
        );
        era.print([
          ss.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게 두 팔을 벌렸다. 안아 주고 싶은 모양이었다.',
        ]);
      });
    } else if (era.get('love:400') >= 75) {
      buffer.push(() => {
        ss.say(
          '다음에는 조금 더 일찍 와 줄래? 빨리 보고 싶어. 그러면 훈련도 더 잘될 테니까.',
        );
        era.print([
          ss.get_colored_name(),
          '은(는) 희미하게 붉어진 뺨을 돌리며 ',
          you.get_colored_name(),
          '의 눈을 바라보지 못했다.',
        ]);
      });
    } else if (era.get('love:400') >= 50) {
      buffer.push(() => {
        ss.say(
          '조금 더 가까이 와 줄래? 아니, 내가 고른 트레이너가 얼마나 뛰어난지 보고 싶을 뿐이야.',
        );
        era.print([
          ss.get_colored_name(),
          '의 시선은 이제 ',
          you.get_colored_name(),
          '에게서 떨어지지 않았다.',
        ]);
      });
    } else {
      buffer.push(
        () => {
          ss.say('트레이너로서 적당한 시간에 왔네. 적어도 지각은 아니야.');
          era.print([
            ss.get_colored_name(),
            '은(는) 고개를 끄덕이며 ',
            you.get_colored_name(),
            '을(를) 인정하는 듯했다.',
          ]);
        },
        () => {
          ss.say(`마침 잘 왔어, ${callname}. 오늘은 어떻게 진행할 거야?`);
          era.print([ss.get_colored_name(), '은(는) 흥미로워 보였다.']);
        },
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async office_study(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `공부를 가르쳐 준다니…… 설마 내가 ${callname}의 과제를 가르쳐 줘야 하는 거야?`,
      );
      await ss.say_and_wait(
        `농담이야. ${callname}. 네가 내 공부를 도와준다니 정말 고마워.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '는 기지개를 켜며 즐거운 표정을 지었다.',
      ]);
    } else {
      await ss.say_and_wait(
        '공부라니, 우리 집안엔 학업 성적이 안 좋은 사람이 거의 없는데 말이야,',
      );
      await ss.say_and_wait(
        `아, 맞다! 차라리 ${callname} 네가 트레이너에 관한 지식을 내게 가르쳐 주는 건 어때?`,
      );
      await ss.say_and_wait(
        '어쩌면 언젠가 나 혼자서 날 스스로 훈련할 수 있게 될지도 모르잖아!',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '의 말에 ',
        you.get_colored_name(),
        '은(는) 실직당하는 비참한 미래를 순간 떠올렸다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async office_prepare(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `걱정할 필요 없어, ${callname}…… 처음 네 팀에 들어갔을 때 말했던 것처럼, 넌 내가 승리를 네게 가져다주는 걸 그저 지켜봐 주기만 하면 돼. 나만 바라봐 줘!`,
      );
    } else {
      await ss.say_and_wait(
        '드디어 올 것이 왔네. 우리가 지금까지 쏟아부은 노력이 결실을 맺을 때가 되었어……',
      );
      await ss.say_and_wait(
        `${callname}, 날 똑똑히 지켜봐 줘. 처음 약속했던 것처럼, 날 선택한 너는 그에 걸맞은 영광을 거머쥐게 될 테니까.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} s_call_c サンデーサイレンスのマンハッタンカフェへの呼び方
   */
  async talk(ss, you, s_call_c) {
    const buffer = [];
    if (era.get('base:400:体力') < era.get('maxbase:400:体力') / 3) {
      buffer.push(async () => {
        await ss.say_and_wait(
          '그다지 현명한 생각 같지는 않네. 그리고 확실히 해두겠는데, 우리 둘은 대등한 관계야. 네 책무를 제대로 기억해 줬으면 좋겠어.',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 지시를 따르는 게 그다지 내키지 않는 모양이다.',
        ]);
      });
      if (era.get('love:400') >= 50) {
        buffer.push(async () => {
          await ss.say_and_wait(
            '네가 정 그렇게 하겠다면…… 알았어. 네 생각에 따라잡을 수 있도록 내 온 힘을 다할게.',
          );
          await era.printAndWait([
            ss.get_colored_name(),
            '는 잠시 생각하더니 ',
            you.get_colored_name(),
            '의 요구를 승낙했다.',
          ]);
        });
      }
    } else {
      switch (era.get('cflag:400:干劲')) {
        case -2:
          buffer.push(
            () =>
              ss.say_and_wait(
                '아…… 나 지금 온몸으로 짜증이 치밀어 오르니까, 할 말 있으면 빨리 해.',
              ),
            () =>
              ss.say_and_wait(
                '내가 듣기 좋은 소리만 골라서 하는 게 신상에 좋을 거야. 안 그러면 나도 모르게 주먹이 날아가 버릴지도 모르니까.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              ss.say_and_wait(
                '으음…… 방금 뭐라고 했어? 미안, 좀 의욕이 안 생겨서 그런데 다시 한번 말해 줄래?',
              ),
            () =>
              ss.say_and_wait([
                '콜록콜록, ',
                s_call_c,
                '가 준 커피를 너무 많이 마셨나 봐…… 목 상태가 좀 이상해.',
              ]),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ss.say_and_wait(
                '지금은 머리가 꽤 맑은 편이니까, 예정된 계획이나 일정이 있다면 빨리 말해 봐.',
              ),
            () =>
              ss.say_and_wait(
                '또 이렇게 평범하기 짝이 없는 날이네. 이런 날이 좀 더 줄어들었으면 좋겠는데.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              ss.say_and_wait(
                '날씨 좋네, 마음에 들어. 그러니까 네 훈련도 내 기분을 이대로 유지해 줄 수 있으면 좋겠어.',
              ),
            () =>
              ss.say_and_wait(
                '이제 슬슬 훈련 시작 안 하면 나 넘치는 체력을 못 이겨서 울타리라도 차 부숴버릴 거야. 뭐, 배상? 당연히 네가 내야지!',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              ss.say_and_wait(
                '나 오늘 활력이 아주 넘쳐흐르거든. 트레이너로서 이런 좋은 기회를 낭비하진 않겠지?',
              ),
            () =>
              ss.say_and_wait(
                '오늘 훈련량은 두 배로 늘려도 돼. 내 컨디션은 네 생각보다 훨씬 좋으니까. 날 곱게 자란 애송이 취급하지 마. 이길 수만 있다면 훈련량이 얼마나 늘어나든 상관없으니까.',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ss サンデーサイレンス */
  async office_gift(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        '나한테 주는 선물이야? ……고마워. 근데 이런 선물을 주다니, 나한테 잘 보이려고 아양이라도 떠는 거야?',
      );
      await era.printAndWait([
        '기대에 부풀어 있던 ',
        ss.get_colored_name(),
        '는 Ｓ◯ＧＡ 게임기인 것을 확인하자마자 눈에 띄게 귀를 축 늘어뜨렸다.',
      ]);
    } else {
      await ss.say_and_wait(
        '선물이구나. 난 다른 사람한테 이런 걸 받아본 적이 별로 없는데,',
      );
      await ss.say_and_wait(
        '그보다 왜 너에게 이걸 건네받으니 심장이 이렇게 거세게 뛰는 걸까?',
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async office_cook(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        '요리를 배우겠다고? 가정실습 시간 때 나도 이것저것 배우긴 했지만,',
      );
      await ss.say_and_wait(
        '그럼…… 잘 부탁해. 배우기로 한 이상 제대로 배워야지, 마치 훈련처럼 말이야.',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '는 자못 진지한 표정을 지었다.',
      ]);
    } else {
      await ss.say_and_wait(
        '사실 나 요리는 별로 소질 없어. 평소에 이런 활동을 접할 기회가 없었거든,',
      );
      await ss.say_and_wait(
        `하지만 ${callname} 네가 제안한 거니까, 같이 실력을 키우며 열심히 배워 보자.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  async office_rest(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        '미안한데, 쉴 때 커튼은 안 치면 안 될까? 나…… 어두운 건 좀 무서워하거든.',
      );
      await era.printAndWait([ss.get_colored_name(), '는 다소 부끄러워했다.']);
    } else {
      await ss.say_and_wait('……');
      await era.printAndWait([
        ss.get_colored_name(),
        '는 잠든 후에도 표정이 편안해 보이지 않았다. 마치 악몽이라도 꾸는 것처럼,',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 옷소매를 더듬어 찾아낸 순간, ',
        ss.sex,
        '는 옷소매를 꽉 붙잡았고 그제야 표정이 부드럽게 풀렸다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} s_call_d サンデーサイレンスのサトノダイヤモンドへの呼び方
   */
  async office_game(ss, you, s_call_d) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        '오락실에 있는 게임기보다 여기 게임이 훨씬 더 재밌네.',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '는 익숙하게 캐릭터를 조작했다. 담당 우마무스메로서 ',
        ss.sex,
        '와 ',
        you.get_colored_name(),
        '의 호흡은 그야말로 척척 맞았고, 이는 ',
        you.get_colored_name(),
        '을(를) 무척 기쁘게 했다.',
      ]);
    } else {
      await ss.say_and_wait([
        '흠, 한 번도 안 해본 게임이네…… 무려 ',
        s_call_d,
        '의 집안에서 출시한 게임이라니, 이건 한번 해볼 수밖에 없겠는걸.',
      ]);
      await era.printAndWait([
        '',
        ss.get_colored_name(),
        '는 흥미진진한 표정으로 화면에 나타난 로고를 바라보며 컨트롤러를 쥐었다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_tree_hollow(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `사실 소리 지를 일은 별로 없는데…… 뭐, 좋아. 레이스 ${ss.uma_sex_title}의 길을 더 멀리까지 걷게 해 줘!!!`,
      );
      await era.printAndWait([
        ss.sex,
        '는 커다란 고목의 구멍을 향해 외치고는, 조금 부끄러운 듯 ',
        you.get_colored_name(),
        '을(를) 쳐다보았다.',
      ]);
    } else {
      await ss.say_and_wait(
        '세 여신이 정말 여기서 이걸 듣고 있다면 시끄럽다고 생각하지 않을까?',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 의미심장하게 고목의 구멍을 바라보았다. 정말 그럴 가능성을 생각하는 모양이었다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async s_a_dating(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `학원 안에서 데이트? ${callname}!? 사제 간 연애는 명백히 금지야!!`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 내키지 않는 듯했다. 하지만 결국 ',
        ss.sex,
        '가 ',
        you.get_colored_name(),
        '의 손에 이끌려 함께 학원 도서관에서 「데이트」를 마쳤다.',
      ]);
    } else {
      await ss.say_and_wait(
        '아…… 학원 안이라…… 그럼 식당은 어때? 네가 사는 거야.',
      );
      await era.printAndWait([
        '그렇게 말하면서도 ',
        ss.get_colored_name(),
        '은(는) 결국 ',
        you.get_colored_name(),
        '의 몫까지 식사비를 냈다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async s_r_lunch(ss, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '와(과) ',
      ss.get_colored_name(),
      '는 옥상에서 도시락을 먹기로 했다.',
    ]);
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `반찬 좀 바꿔도 될까? ${callname}의 도시락에 내가 좋아하는 재료가 들어 있네.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 큼직한 고기 한 조각을 네 도시락에 넣어 주고는 웃으며 ',
        you.get_colored_name(),
        '는 큼직한 고기 한 조각을 당신의 도시락 통에 쏙 집어넣어 주며 향해 미소를 지었다.',
      ]);
    } else {
      await ss.say_and_wait(`${callname}의 도시락은 직접 만든 거야? 좋네.`);
      await ss.say_and_wait(
        `집에서 싸 주는 도시락은 늘 다 못 먹어서 아까웠어. 같이 먹자. 음식을 낭비하는 건 큰 죄야.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 엄청나게 크고 호화로운 도시락을 꺼냈다.',
      ]);
      await era.printAndWait([
        '안 봐도 그 안의 풍성하고 맛있는 재료들이 ',
        you.get_colored_name(),
        '의 지갑으로 감당할 수준을 넘는다는 걸 알 수 있었다.',
      ]);
      await era.printAndWait([
        '물론 더 캐묻지는 않았다. 평소에 ',
        ss.get_colored_name(),
        '이(가) 이 도시락을 어떻게 처리하는지는.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_r_fishing(ss, you, callname) {
    await era.printAndWait([
      '당신과 ',
      ss.get_colored_name(),
      '은(는) 낚시하러 갔다……',
    ]);
    const buffer = [
      async () => {
        await ss.say_and_wait(
          `${callname}, 정말 물고기가 잡혀? 이렇게 뻔한 덫에 일부러 걸려드는 거야?`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '이(가) 고요한 수면의 물결을 바라보는 얼굴은 조금 귀여웠다.',
        ]);
        await era.printAndWait(
          `${ss.sex}는 곧바로 표정을 가다듬고 낚싯대에 온 신경을 집중해 물속의 물고기와 싸우기 시작했다.`,
        );
      },
      async () => {
        await ss.say_and_wait(
          `응, 괜찮은 활동이네. ${callname}의 양동이는 왜 비어 있어? 조금 나눠 줄까?`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 잡힌 물고기를 바늘에서 떼어 내며 ',
          you.get_colored_name(),
          '을(를) 순수한 눈으로 바라보았다. 하지만 ',
          you.get_colored_name(),
          '의 마음은 조금 상처받은 것 같았다.',
        ]);
      },
      async () => {
        await era.printAndWait([
          ss.sex,
          '가 고요한 시냇물을 차분히 바라보는 모습은 평소 기세 좋게 자기 뜻을 밀어붙이는 레이스 ',
          ss.uma_sex_title,
          '의 모습과는 전혀 달랐다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 평소의 ',
          ss.sex,
          '와 사뭇 다른 모습을 머릿속에 새겼다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_walking(ss, you) {
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '강가 공기가 시원하네. 다음 아침 달리기는 여기서 해 볼까?',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 깊이 숨을 들이마시며 강바람을 느꼈다.',
        ]);
      },
      () =>
        era.printAndWait([
          ss.get_colored_name(),
          '은(는) 말없이 강가를 걸으며 가끔 뒤따라오는 ',
          you.get_colored_name(),
          '을(를) 돌아보았다. 무언가 생각하는 듯했다.',
        ]),
    ];
    if (era.get('love:400') >= 75) {
      buffer.push(() =>
        era.printAndWait([
          ss.get_colored_name(),
          '은(는) 천천히 ',
          you.get_colored_name(),
          '에게 다가와 거절할 틈도 주지 않고 ',
          you.get_colored_name(),
          '의 손을 잡았다. 손가락을 깍지 끼고는 손끝으로 ',
          you.get_colored_name(),
          '의 손등에 살며시 무언가 낙서를 그렸다.',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_arcade(ss, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await ss.say_and_wait(
          '이 게임 이름이 뭐야? 저스트 댄스? 한번 해 보자. 재미있어 보이네……',
        );
        await era.printAndWait([
          '결국 ',
          ss.get_colored_name(),
          '은(는) 높은 점수로 기계의 최고 기록을 경신했다.',
        ]);
      },
      async () => {
        await ss.say_and_wait([
          callname,
          '의 반응은 나보다 느린 것 같네. 자, 자!',
        ]);
        await era.printAndWait([
          '화면 속 캐릭터를 조종하던 ',
          ss.get_colored_name(),
          '은(는) 매끄러운 연속 공격으로 ',
          you.get_colored_name(),
          '이(가) 조종하는 캐릭터를 쓰러뜨렸다.',
        ]);
        await era.printAndWait([
          '그리고 ',
          you.get_colored_name(),
          '에게 조금 도발적인 미소를 보냈다. ',
          ss.sex,
          '는 정말 즐거워 보였다.',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ss サンデーサイレンス */
  async o_s_drawing(ss) {
    await era.printAndWait([
      '와 ',
      ss.get_colored_name(),
      '은(는) 상점가의 경품 추첨에 참가했다……',
    ]);
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '이런 건 상인들이 돈 버는 방법이잖아. 매번 당첨되면 벌써 가게 문을 닫았겠지.',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 그렇게 말하면서도 경품 인형을 바라보고 있었다.',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          '추첨? 갖고 싶은 게 있으면 돈을 줘. 점원한테 적당한 값에 사 올게.',
        );
        await era.printAndWait([
          '그렇게 말하면서도 ',
          ss.get_colored_name(),
          '은(는) 얌전히 버튼을 누르고 결과를 기다렸다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_ktv(ss, you, callname) {
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '혼자 여기 노래하러 오는 건 조금 처량하네. 그래도 네가 있으니 훨씬 나아.',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 마이크를 잡고 작은 목소리로 노래하기 시작했다.',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          `음, 목록에 못 들어 본 노래뿐이네. ${callname}이(가) 한 곡 들려줄래?`,
        );
        await ss.say_and_wait(
          `푸하하, 농담이야. 난 레이스 ${ss.uma_sex_title} 아이돌이라고. 노래를 못 부를 리 없잖아?`,
        );
      },
      async () => {},
    ];
    if (era.get('love:400') >= 75) {
      buffer.push(async () => {
        await ss.say_and_wait(
          '같이 불러!! 이 노래야!! 쭉 누군가랑 같이 부르고 싶었어!',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 억지로 마이크를 ',
          you.get_colored_name(),
          '에게 쥐여 주었다. 화면에는 남녀가 함께 부르는 사랑 노래가 흘러나왔다. 마지막에는 두 사람이 결혼해 행복한 일생을 보냈다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   * @param {PrintedSpan} s_call_c サンデーサイレンスのマンハッタンカフェへの呼び方
   */
  async o_s_movie(ss, you, callname, s_call_c) {
    const buffer = [
      async () => {
        await ss.say_and_wait([
          '귀신 나오는 공포 영화? ',
          callname,
          ', 내가 악령 같은 걸 무서워할 줄 알았어?',
        ]);
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 자신만만하게 웃으며 손에 든 표를 보았다.',
        ]);
        await era.printAndWait([
          '실제로 그 말대로였다. ',
          ss.sex,
          '는 제법 무서운 영화를 끝까지 평온하게 보고 나왔다. 나가는 길에 ',
          ss.sex,
          '는 ',
          you.get_colored_name(),
          '의 팔을 잡았다.',
        ]);
        await era.printAndWait([
          '이런 건 ',
          s_call_c,
          ' 쪽에서 본 것에 비하면 너무 요란해…… 쉿, 묻지 마. 방금 말은 잊어버려.',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          `이 작품은…… 아, 재미있겠다. ${callname}이(가) 담당의 마음을 너무 잘 알면 그냥 넘길 수가 없네.`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 표를 받아 들고 함께 재미있는 옛 SF 영화를 보았다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   * @param {number} dice おみくじの出目、0-1 の小数、小さいほど良い
   */
  async o_c_pray(ss, you, callname, dice) {
    await era.printAndWait([
      ss.get_colored_name(),
      '와(과) ',
      you.get_colored_name(),
      '은(는) 신사에 기원하러 갔다.',
    ]);
    await ss.say_and_wait(`이런 거…… 정말 효과가 있어?`);
    await era.printAndWait([
      ss.get_colored_name(),
      '은(는) 반신반의하며 손을 씻었다. 참배를 마치고 나서 ',
      ss.sex,
      '는 ',
      you.get_colored_name(),
      '을(를) 바라보며 의문을 입에 올렸다.',
    ]);
    await you.say_and_wait(
      '네 노력과 내 노력이 좋은 성적을 내는 가장 확실한 바탕이지. 하지만 그 밖에 약간의 운도 필요하지 않을까? 마음을 달래는 거라고 생각해도 돼.',
    );
    await ss.say_and_wait(
      `그래…… 그럼 사양 않고 빌어야겠네. 헌금을 받았으니 일을 안 할 수는 없겠지!`,
    );
    await era.printAndWait([
      '헌금함에 동전 떨어지는 소리와 ',
      ss.get_colored_name(),
      '의 말이 겹쳤다. ',
      ss.sex,
      '는 ',
      you.get_colored_name(),
      '의 설명을 믿기로 한 모양이었다.',
    ]);
    if (dice < 0.6) {
      await ss.say_and_wait(
        `음, 정말 반응이 있어! 저기, ${callname}, 이건 대단한데.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 조금 놀라며 ',
        ss.sex,
        '는 귀 장식을 쓰다듬었다.',
      ]);
      await ss.say_and_wait(
        `신까지 내 소원에 응답했으니…… 더더욱 쉴 이유가 없겠네. 이따 돌아가면 훈련하자!`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 기세 좋게 ',
        you.get_colored_name(),
        '의 손을 잡아끌며 트레센으로 돌아가려 했다.',
      ]);
    } else {
      await ss.say_and_wait(`칫…… 다들 영험하다는 신도 만능은 아닌가 보네……`);
      await ss.say_and_wait(
        `${callname}, 일찍 돌아가는 게 좋겠어. 신이 답하지 않겠다면, `,
      );
      await ss.say_and_wait(
        `그 도움 없이도 해낼 수 있다는 걸 똑똑히 보여 주자.`,
      );
      await era.printAndWait([
        '그렇게 말하면서 ',
        ss.get_colored_name(),
        '은(는) 짜증스럽게 꼬리를 흔들었다. ',
        ss.sex,
        '는 말처럼 평온하지 않았고, 오히려 조금 침울해 보였다.',
      ]);
      await era.printAndWait([
        '왠지 모르게, ',
        you.get_colored_name(),
        '도 마음이 불편해져, 두 사람은 신사를 떠났다.',
      ]);
    }
  },
  /** @param {CharaTalk} ss サンデーサイレンス */
  async o_s_restaurant(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `커피를 시킬 거면 설탕이랑 우유를 많이 넣어 줘. 커피는 달아야 맛있어.`,
      );
    } else {
      await ss.say_and_wait(
        `이거 먹어 볼래? 술을 못 마신다고? 괜찮아, 만드는 과정에서만 술이 들어간 거라 문제없어.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_dating(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `데이트? 나랑? ${callname}, 진심이야? 차라리 트레센에서 데이트하면서 훈련하는 건 어때?`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 놀란 얼굴로 귀를 쓰다듬으며 잘못 들은 게 아닌지 확인했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 확고한 표정을 보고 ',
        ss.sex,
        '는 난처한 듯 한숨을 쉬었다.',
      ]);
      await ss.say_and_wait(
        `알았어, 알았어. 하지만…… 나 같은 ${ss.uma_sex_title}와 데이트해 봐야 재미없을 텐데.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 계속 거절하면서도 ',
        ss.sex,
        '의 눈동자에는 기대가 보였다.',
      ]);
      era.printButton(
        `같이 놀러 가고 싶어. 네가 있으면 그것만으로도 재미있어.`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        `뭐…… 뭐야!! 그런 말을 하다니…… ${ss.uma_sex_title}를 속이는 데 익숙한 바람둥이야?`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 붉어진 뺨을 돌리고 눈을 마주치지 못했다. 그래도 ',
        you.get_colored_name(),
        '이(가) 내민 손은 잡았다.',
      ]);
      await era.printAndWait(`그 뒤 두 사람은 마음껏 놀았다.`);
    } else {
      await ss.say_and_wait(`데이트? 진실 게임에서 진 벌칙이야?`);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 반신반의하며 ',
        you.get_colored_name(),
        '을(를) 바라보다가 한숨을 쉬었다.',
      ]);
      await ss.say_and_wait(
        `어쨌든 레이스랑 훈련이 제일 중요하잖아? 게다가 나처럼 음침한 레이스 ${ss.uma_sex_title}와 놀러 가 봤자 재미없을 거야.`,
      );
      await era.printAndWait([
        '그렇게 말하면서도 ',
        ss.get_colored_name(),
        '은(는) 저도 모르게 ',
        you.get_colored_name(),
        '을(를) 훔쳐보았다. ',
        you.get_colored_name(),
        '이(가) 정말로 ',
        ss.sex,
        '를 초대하는지 확인하는 것 같았다.',
      ]);
      await ss.say_and_wait(
        `음…… 진심이야? 알았어…… 그럼 출발하자. 내가 안내할게.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 조금도 변하지 않는 표정을 보고 ',
        you.get_colored_name(),
        '의 마음을 알아챈 듯했다.',
      ]);
      await era.printAndWait(`얼굴은 여전히 못마땅해 보였지만, `);
      await era.printAndWait([
        ss.sex,
        '가 ',
        you.get_colored_name(),
        '의 손을 잡는 순간 들뜬 기색이 ',
        you.get_colored_name(),
        '에게는 분명히 느껴졌다. 그 뒤 ',
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '을(를) 서점으로 데려가 함께 책을 읽었다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async o_s_shopping(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `여기 옷은 나한테 안 맞아. 난 늘 전문점에서 맞춰 입거든. ${callname}도 같이 갈래? 내 앞으로 달아 두면 돼.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 눈을 가늘게 뜨고 웃었다. 진심으로 초대하는 건지는 알 수 없었다.',
      ]);
    } else {
      await ss.say_and_wait(
        `아, 신상품이 들어왔네. ${callname}, 이쪽이야. 신발 편자를 바꿀 때라고 생각했는데, 새 훈련용 중량 도구랑 운동복도 있어.`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 조금 들뜬 기색으로 운동용품점의 물건을 둘러보았다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   */
  good_night_normal(ss, you) {
    era.print([
      '바쁜 하루를 보낸 뒤 ',
      you.get_colored_name(),
      '은(는) ',
      ss.get_colored_name(),
      '을(를) 기숙사 앞까지 데려다주었다.',
    ]);
    ss.say('여기까지면 돼. 정말 고마워……');
    era.print([
      ss.get_colored_name(),
      '은(는) 살짝 고개를 숙이고 기쁜 듯 웃으며 ',
      ss.sex,
      '의 기숙사로 돌아갔다.',
    ]);
  },
  /**
   * @param {CharaTalk} ss サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {1|2} check 求愛判定。2は大成功
   */
  async good_night_sex(ss, you, check) {
    ss.say(`같이 들어갈래?`);
    era.print([
      ss.get_colored_name(),
      '은(는) 두 다리를 비볐다. ',
      you.get_colored_name(),
      '은(는) ',
      ss.sex,
      '의 호흡이 점점 빨라지는 것을 느꼈다.',
    ]);
    era.print([
      '레이스에서 번개처럼 달리던 탄탄한 다리가 지금은 안절부절못하며 천천히 ',
      you.get_colored_name(),
      '에게 다가왔다. ',
      ss.sex,
      '는 손을 뻗어 ',
      you.get_colored_name(),
      '을(를) ',
      ss.sex,
      '의 방으로 끌어들이려 했다.',
    ]);
    era.printButton('받아들인다', 1);
    if (check !== 2) {
      era.printButton('모르는 척한다', 2);
    }
    return await era.input();
  },
  cl_temple_fair: (() => {
    const title = '밤하늘의 불꽃';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait([
        '그러니까…… ',
        callname,
        ', 내 유카타 잘 어울려?',
      ]);
      await era.printAndWait([
        '연초의 기모노와는 전혀 달랐다. 지금 ',
        ss.get_colored_name(),
        '은(는) 여름 분위기가 물씬 나는 유카타를 입고 있었다.',
      ]);
      await era.printAndWait([
        '긴 머리를 올려 묶으니 ',
        ss.get_colored_name(),
        '은(는) 단아하고 우아해 보였다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '는 자연스럽게 ',
        you.get_colored_name(),
        '의 손을 잡고 ',
        you.get_colored_name(),
        '의 가슴에 기댄 채 ',
        you.get_colored_name(),
        '에게 이끌려 여름 축제 행사장을 돌아다녔다.',
      ]);
      await era.printAndWait([
        '두 사람은 거의 모든 노점을 돌며 먹을거리부터 놀 거리까지 하나도 놓치지 않았다.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 운 좋게 비녀를 뽑아, 가게 주인이 지켜보는 가운데 ',
        you.get_colored_name(),
        '에게 ',
        ss.sex,
        '의 머리에 꽂아 달라고 했다.',
      ]);
      await ss.say_and_wait(
        '오늘 정말 즐거웠어…… 솔직히 너를 만나지 않았다면 불꽃놀이조차 보러 오지 않았을지도 몰라.',
      );
      await era.printAndWait([
        '화려한 불꽃 아래, 눈에 잘 띄지 않는 구석에 앉은 두 사람은 다정한 연인처럼 보였다.',
      ]);
      era.printButton('「그렇구나. 선물이 있어. 이쪽으로 와.」', 1);
      await era.input();
      await era.printAndWait([
        '불꽃놀이가 끝나자 ',
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 손을 잡고 ',
        ss.get_colored_name(),
        '의 어리둥절한 표정은 아랑곳하지 않은 채 ',
        ss.sex,
        '를 탁 트인 모래사장으로 데려갔다.',
      ]);
      await ss.say_and_wait(['어, ', callname, '의 선물……이…… 뭐야?']);
      await era.printAndWait([
        ss.sex,
        '는 불안과 기대가 섞인 눈으로 ',
        you.get_colored_name(),
        '을(를) 바라보며 벌써 유카타 허리띠에 손을 뻗었다.',
      ]);
      await era.printAndWait('(펑!!!)');
      await era.printAndWait([
        '불꽃이 하늘로 올라가 터지는 소리가 ',
        ss.sex,
        '의 귀에 닿았다. ',
        ss.sex,
        '는 놀라서 뒤를 돌아보았다.',
      ]);
      await era.printAndWait(
        '멀리서 한 발, 또 한 발 터지며 아름답게 빛나는 무늬를 그렸다.',
      );
      await ss.say_and_wait('이…… 이건……?');
      await era.printAndWait([
        ss.sex,
        '의 눈이 조금 촉촉해졌다. 돌아보니 손에 드는 불꽃을 꺼낸 ',
        you.get_colored_name(),
        '이(가) 있었다.',
      ]);
      await you.say_and_wait(
        '여름에는 같이 불꽃놀이를 해야 즐겁잖아. 내가 준비한 불꽃이야. 다 보고 나면 같이 해 볼래?',
      );
      await era.printAndWait([
        '바로 다음 순간 ',
        you.get_colored_name(),
        '은(는) 한 줄기 바람을 느꼈고, 순식간에 ',
        ss.get_colored_name(),
        '에게 부드러운 모래 위로 밀려 넘어졌다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '의 목소리를 들으며 살며시 ',
        ss.get_colored_name(),
        '의 머리를 쓰다듬고, 때로는 ',
        ss.sex,
        '의 귀 안쪽 솜털을 간질였다.',
      ]);
      await era.printAndWait([
        '물처럼 부드러워진 ',
        ss.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '의 위에 엎드려 더없이 아름다운 미소를 지었다.',
      ]);
      await ss.say_and_wait([
        callname,
        '의 선물은 너무 무거워…… 이렇게 무거운 선물은 몸으로 갚게 해 줘.',
      ]);
      await era.printAndWait([
        '결국 밤의 모래사장에서 늦게까지 놀다가 녹초가 되어 방으로 돌아왔고, 침대에 닿자마자 잠드는 것으로 끝났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
