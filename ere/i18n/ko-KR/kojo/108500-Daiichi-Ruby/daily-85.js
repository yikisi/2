/**
 * @file ダイイチルビー - 日常
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} ruby ダイイチルビー */
  good_morning(ruby) {
    const buffer = [
      () => ruby.say('안녕하신가요, 그럼 훈련을 시작하도록 하죠.'),
      () =>
        ruby.say(
          '오늘도 잘 부탁드립니다. 지난날의 일족에 걸맞은 수준에 도달할 수 있도록, 저를 철저하게 지도해 주십시오.',
        ),
      () =>
        ruby.say(
          '제 트레이너가 되신 이상, 각오는 되어 있으시겠지요. 지닌 능력을 유감없이 발휘해 주시길 바랍니다.',
        ),
      () =>
        ruby.say(
          '모두의 위광을 이어 나가기 위해서는 더 많은 노력이 필요합니다. 하지만 지금의 몸 상태라면, 그것도 불가능한 일은 아닙니다.',
        ),
      () =>
        ruby.say(
          '레이스에서 성과를 내는 것은 책임입니다. 목적은 명확하니, 그렇다면 게으름 피우지 않고 전진할 뿐입니다.',
        ),
      () =>
        ruby.say(
          '스포츠 의학회의 최신 발표는 당연히 이미 확인해 두었습니다. 나중에 함께 논의해 볼까요?',
        ),
      () =>
        ruby.say(
          '저는 단순한 승리를 추구하지 않습니다. 선명한 광채를 남기지 못한다면, 우리 일족에게는 승리라고 할 수 없습니다…… 아시겠나요?',
        ),
    ];
    if (era.get('flag:当前声望') >= 500) {
      buffer.push(() =>
        ruby.say(
          '당신은 이미 사람들에게 자신의 자격을 증명해 보였습니다. 두려워할 것도, 겁먹을 것도 없습니다. 그저 사명일 뿐입니다. 함께 힘을 합쳐 이 일을 완수해 내죠.',
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say('당신이 걷는 길 위에도 반짝이는 빛이 가득하기를.'),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} r_awake ダイイチルビーが起きているか
   * @param {boolean} after_recruit 募集後、初めて選択した相手か
   */
  select(ruby, you, r_awake, after_recruit) {
    if (!r_awake) {
      era.print([
        ruby.get_colored_name(),
        '는 깊은 잠에 빠져들었다. 물론 그 주범인 ',
        you.get_colored_name(),
        '의 품 안에서 말이다.',
      ]);
    } else if (after_recruit) {
      ruby.say('오늘부터 잘 부탁드립니다.');
      ruby.say('화려하게, 최상으로. 언제나 가장 눈부신 빛을 피워낼 것.');
      ruby.say('일족의 신조를 가슴에 새기고, 그저 앞으로 나아갈 뿐입니다.');
      ruby.say('……이상입니다.');
    } else {
      const buffer = [
        () =>
          era.print([
            ruby.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '에게 고개를 숙여 인사했다.',
          ]),
        () => {
          era.print([
            ruby.get_colored_name(),
            '는 드레스를 입은 듯 ',
            you.get_colored_name(),
            '에게 커트시로 예를 갖추었다.',
          ]);
          era.print('무릎을 굽히며 양 무릎을 살짝 벌리고 한쪽 발을 뒤로 뺐다.');
          era.print([
            you.get_colored_name(),
            '은(는) 어쩔 수 없이 사람들이 지켜보는 가운데 조금 과장되게 답례했다.',
          ]);
        },
      ];
      if (era.get('love:85') >= 75) {
        buffer.push(() => {
          era.print([
            ruby.get_colored_name(),
            '는 잠시 눈을 붙였고, ',
            you.get_colored_name(),
            '은(는) ',
            ruby.sex,
            '와 함께 침대에 누워 있었다.',
          ]);
          era.print(
            '창밖에는 서늘한 바람이 불었다. 말소리 없이 나뭇가지만 바람에 흔들렸다.',
          );
          era.print([
            '천천히 눈을 뜬 ',
            ruby.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '의 품에서 기지개를 켜고 몸을 일으켰다.',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_study(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          '먼저 천천히 엉킨 곳을 풀고, 빗질할 때는 모근 쪽 머리를 꽉 잡고 해주세요. 제 머리를 빗겨주는 것이 그저 일시적인 충동은 아니겠지요?',
        ),
      async () => {
        await ruby.say_and_wait(
          '대인 관계를 잘 다루거나, 혹은 강력한 인적 네트워크를 구축하기 위해 더 중요한 것은 타인을 위해 가치를 창출하는 법을 아는 것입니다.',
        );
        await ruby.say_and_wait(
          '오직 타인을 위해 가치를 창출할 때만 인간관계가 지속될 수 있습니다. 그렇지 않으면 아무리 많은 사람을 알고 지내도 의미 없는 사교일 뿐입니다. 왜냐하면 아무도 당신을 기억해주지 않을 테니까요.',
        );
      },
    ];
    if (ruby.sex_code !== 1 && era.get('love:85') >= 90) {
      buffer.push(
        async () => {
          await ruby.say_and_wait(
            '간단히 말해서, 규칙적인 성생활을 유지하고 피임을 하지 않는다면 매우 높은 임신율에 도달할 수 있습니다.',
          );
          await ruby.say_and_wait(
            '평범한 인간의 월간 임신율은 고작 20~30%에 불과하지만, 우리 우마무스메는 발정기에 들어서면 그 확률이 최소 2배 이상 증가합니다.',
          );
        },
        async () => {
          await ruby.say_and_wait(
            '우마무스메의 난자 생존 시간은 일반인보다 더 길기 때문에, 반드시 배란일 당일에 관계를 가질 필요는 없습니다.',
          );
          await ruby.say_and_wait(
            '배란 전후 2~3일 모두 최적의 시기이므로, 당신이 일주일에 5~6회 정도 관계를 가질 수만 있다면 제 배란일 따위는 신경 쓰지 않으셔도 됩니다.',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   */
  async talk(ruby, you) {
    const buffer = [];
    if (era.get('base:85:体力') < 0.45 * era.get('maxbase:85:体力')) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '오늘은 무척 지쳤습니다. 송구하지만 지시를 온전히 이해할 여력이 없군요. 양해해 주시길.',
          ),
        () => ruby.say_and_wait('역시…… 조금 무리한 모양입니다.'),
        () => ruby.say_and_wait('미처 나누지 못한 이야기는 조금 후에 이어서……'),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(
          () =>
            ruby.say_and_wait(
              'あれは疲れますわ。ご予定なら、わたくしが沐浴する時間を空けてくださいまし。',
            ),
          () =>
            ruby.say_and_wait([
              '『疲れる』という字を、ご存じですの？ 先ほど、ある',
              you.sex_code === 1 ? '紳士' : '淑女',
              'がわたくしの上に伏せていた、あの状態ですわ。',
            ]),
        );
      }
    } else if (era.get('cflag:85:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:85:干劲')) {
        case 2:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '마음에는 화려함을, 몸가짐은 최상으로. 영원히 변하지 않을 신조입니다.',
              ),
            () =>
              ruby.say_and_wait(
                '일족에 더 큰 영광을. 그러니 어떤 어려움이든 극복하는 것 외에는 선택지가 없습니다.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => ruby.say_and_wait('생각해 두신 단련 방법이 있나요?'),
            () =>
              ruby.say_and_wait(
                '오늘의 트레이닝 메뉴를 보여 주십시오. 강도가 높아도 상관없습니다!',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '준비는 되어 있습니다. 어중간한 트레이닝은 내놓지 마시길.',
              ),
            () =>
              ruby.say_and_wait(
                '트레이닝에 관해 제안이 있습니다. 가지고 계신 소책자를 봐 주십시오.',
              ),
            () =>
              ruby.say_and_wait(
                '아뇨…… 사양할 필요 없습니다. 시간은 한정되어 있고, 해야 할 일은 더 많으니까요.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () => ruby.say_and_wait('큭…… 일족을 짊어졌다면, 결코……'),
            () => ruby.say_and_wait('꺾여서는 안 됩니다…… 절대로……'),
          );
          break;
        case -2:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '오늘의 컨디션은…… 원인을 서둘러 밝혀야겠군요.',
              ),
            () => ruby.say_and_wait('……감정의 기복은 성가시네요.'),
            () => ruby.say_and_wait('후…… 이 정도쯤이야, 네……'),
          );
      }
      buffer.push(() =>
        ruby.say_and_wait(
          '내일 일정 말입니다. 회식은 취소했습니다. 추가 연습을 잡아 주십시오.',
        ),
      );
    } else {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '지금은 쉬는 시간입니다. 다만 가정교사의 온라인 수업도 있으니, 먼저 외국어 과제를 마치겠습니다.',
          ),
        () =>
          ruby.say_and_wait(
            '『추위에 떠는 모든 이에게 웃음을 전하고, 그렇게 새해를 맞는 것. 그것이 내 일이다』…… 아버지께서 늘 하시던 말씀입니다.',
          ),
        () =>
          ruby.say_and_wait(
            '본가의 사파이어…… 저희 개입니다. 무척 영리하지요. 배달된 신문이 누구 것인지 알아보고 그 사람에게 가져다줍니다.',
          ),
        () =>
          ruby.say_and_wait(
            '품위, 기능, 디자인. 이 의상은 그 모든 것을 충족하는 최선의 답입니다.',
          ),
        () =>
          ruby.say_and_wait(
            '나중에 제 옷매무새를 제대로 정돈할 자신은 있으신가요?',
          ),
        () =>
          ruby.say_and_wait(
            '늘 당당하게 하나씩 해내는 당신을 저희도 인정하고 있습니다.',
          ),
        () =>
          ruby.say_and_wait(
            '가끔 비슷한 질문을 받습니다만…… 실제로는 메이드에게 부탁하는 일이 거의 없습니다. 무슨 일이든 스스로 해결하지요.',
          ),
        () =>
          ruby.say_and_wait(
            '『화려한 일족』. 모두 그 칭호에 걸맞은 고결한 분들입니다. 그러니 저 역시 정점에 서야 합니다.',
          ),
        () =>
          ruby.say_and_wait(
            '당신은 제 트레이너입니다. 직무를 성실히 수행하고, 연구와 노력을 게을리하지 마시길.',
          ),
        () =>
          ruby.say_and_wait(
            '어머니도 할머니도 레이스장에서 위업을 남기셨습니다. 제게 그 피가 흐른다는 것을 증명하려면…… 레이스밖에 없습니다.',
          ),
        () =>
          ruby.say_and_wait(
            '붉은 머리 장식과 나비넥타이. 『반드시 뛰어난 성적을 거두겠다』는 결의를 나타내는 색입니다.',
          ),
        () =>
          ruby.say_and_wait(
            '봄에는 꽃목걸이를 합니다. 시기에 맞는 장신구를 착용하면 그 사람의 입장이 드러나지요.',
          ),
        () =>
          ruby.say_and_wait(
            '일족에 걸맞은 빛을 피워내야 합니다. 현란하고 찬란한…… 전갈의 불꽃과 같은 빛을.',
          ),
        () =>
          ruby.say_and_wait(
            '의상도 하나의 상징입니다. 위닝 라이브가 있다면 관객의 시선을 끌 화려함이 필요하지요.',
          ),
        () =>
          ruby.say_and_wait(
            '수면 부족은 판단력에 영향을 줍니다. 잠이 오지 않을 때는 허브차 등을 드시길.',
          ),
        () =>
          ruby.say_and_wait(
            '일족에는 잠들기 전의 규칙이 있습니다. 오늘 하루 그 이름을 욕되게 하지 않았는지 돌아보는 것. 중요한 시간이지요.',
          ),
        () =>
          ruby.say_and_wait(
            '오늘 아침 신문은 보셨나요? 일족에 관한 기사가 있으니 꼭 읽어 보십시오.',
          ),
        () =>
          ruby.say_and_wait(
            '어릴 때부터 바삐 일하러 나가시는 부모님을 배웅하며 일어나곤 해서, 지금도 알람은 필요 없습니다.',
          ),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          ruby.say_and_wait(
            '당신은 제가 인정한 동반자입니다. 자부심을 갖고 고개를 드십시오.',
          ),
        );
      }
      if (era.get('love:85') >= 90) {
        buffer.push(() =>
          ruby.say_and_wait(
            '오늘은 일족의 내년 방침을 정하는 중요한 날입니다. 차가 마중 나올 테니 부디 늦지 마시길.',
          ),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_gift(ruby) {
    const buffer = [
      () => ruby.say_and_wait('당신의 지원에 진심으로 감사드립니다.'),
      () =>
        ruby.say_and_wait(
          '답례품은 당신에 대한 제 인상에 맞추어 골라도 괜찮을까요?',
        ),
    ];
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '당신이 무슨 말을 하고 싶은지 알고 있으니 부끄러워하실 필요 없습니다. 우리나라에서는 조혼이 꽤 흔한 일이니까요.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_cook(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        '큭…… 그건 무슨 표정인가요? 저라고 해서 못하는 게 전혀 없는 건 아니랍니다.',
      );
    } else {
      await ruby.say_and_wait([
        '비주얼이—— 상당히 훌륭하군요. 맛도 흠잡을 데가 없으니, 당신은 분명 ',
        ruby.sex_code === 1 ? '남자아이' : '여자아이',
        '의 입맛을 사로잡을 수 있겠군요.',
      ]);
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async office_rest(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        '그대로 움직이지 말고, 어깨 좀 빌려주세요. 잠시만, 잠시만요……',
      );
    } else {
      await ruby.say_and_wait(
        '무겁지 않나요? 제 머리숱이 꽤 많을 텐데…… 읏! 살, 살살요. 네, 좀 더 다정하게 쓰다듬어 주세요……',
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} call_67 ダイイチルビーがサトノダイヤモンドを呼ぶ呼称
   */
  async office_game(ruby, call_67) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait('흥미롭군요. 다른 것도 시도해보고 싶습니다.');
    } else {
      await ruby.say_and_wait([
        '과연 그렇군요, ',
        call_67,
        ' ',
        ruby.sex,
        '가 밤낮으로 빠져드는 이유를 조금은 알 것 같습니다.',
      ]);
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async s_a_tree_hollow(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '그 대신 저를 동반해 주시겠어요? 이 유약한 ',
        ruby.child_sex_title,
        '의 푸념을 들어주시겠습니까?',
      ]);
    } else {
      await ruby.say_and_wait(
        `선조 분들께서도 세 여신님 곁에서 우리를 함께 지켜보고 계시겠죠.`,
      );
    }
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async s_a_dating(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '사람들이 보는 앞에서 연하의 ',
        ruby.child_sex_title,
        '와 아무렇지 않게 손을 잡으시다니. 대단하시군요.',
      ]);
    } else {
      await ruby.say_and_wait(
        `그렇게 세게 잡지 않으셔도 멋대로 달아나지 않습니다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   */
  async s_r_lunch(ruby, you) {
    const buffer = [];
    buffer.push(() =>
      era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 함께 집사가 가져온 호화로운 도시락을 나누어 먹었다.',
      ]),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '『평생 베어본 베개 중 최고의 베개』라고요?…… 말은 청산유수시군요. 눈은, 아직 뜨지 마세요.',
          ),
        () =>
          ruby.say_and_wait(
            '十分に満たされましたわ。午後のトレーニングでは、これ以上の嫌がらせは禁止ですわ。',
          ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          'ふ……もういいですわ、自分で脱ぎます。こういうとき、あなたは不器用になりますもの。服を破ったら困りますわ。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_r_fishing(ruby) {
    const buffer = [
      () => ruby.say_and_wait(`사실 다이이치 가문에도 전문 어업팀이 있습니다.`),
      () =>
        ruby.say_and_wait(
          `레일로스라는 이름을 아시나요? 이곳의 물고기들이 언제까지 남아 있을지 모르겠군요.`,
        ),
      () =>
        ruby.say_and_wait(
          `무게가 가벼우니 저와 함께 사진을 찍자고요? 당신이라는 분은……`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_r_walking(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait(
        '아무리 갈 길이 멀다 한들, 이 강물은 저 파란만장하고 넓은 바다로 흘러가겠죠.',
      ),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `메지로 가문의 강변 근처에 새로 지은 낡은 아파트 말입니다만, 저희 일족도 건설에 참여했습니다. 시간 나면 같이 보러 가보죠.`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          '幼いのに、こんなに肌を出す服を着るなんて。',
          ruby.couple_title,
          'は何をお考えなのかしら。わたくしが着るのを見たい？ お断りですわ……少なくとも、今は。',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_s_arcade(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `이건 저도 알고 있습니다. 사토노 그룹에서 새로 출시한 JRPG군요. 그 기원인 《진 · 삼여신전생》의 명성은 저조차도 익히 들은 바 있습니다.`,
      );
    } else {
      await ruby.say_and_wait(
        `게임 배경에 대한 고증이 무척 상세하군요. 제작자가 스토리의 설정을 충실하게 재현해 낸 점은 칭찬할 만합니다.`,
      );
    }
  },
  /**
   *  @param {CharaTalk} ruby ダイイチルビー
   * @param {boolean} hot_spring 温泉旅行券を引いたか
   *  */
  async o_s_drawing(ruby, hot_spring) {
    if (hot_spring) {
      await ruby.say_and_wait('온천 여행권에 당첨됐습니다.');
    } else if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        '뭐라고요? 네, 뭐 좋습니다. 돈을 썼으니 오락이라고 생각하죠.',
      );
    } else {
      await ruby.say_and_wait(
        '어머님께는 허물없이 지내시는 벗이 계십니다. 사흘 밤낮으로 애인을 강간해 그릇된 금전관을 바로잡으셨다고 합니다.',
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
   * */
  async o_s_ktv(ruby, call_93) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        '네……',
        call_93,
        '이 전에 말씀하신 곳이 여기군요. 방음재가…… 아주 훌륭하네요.',
      ]);
    } else {
      await ruby.say_and_wait(
        `나이트클럽의 가수보다 낫다고요? 나중에 당신 방으로 찾아가겠습니다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} callname ダイイチルビーがプレイヤーを呼ぶ呼称
   * */
  async o_s_movie(ruby, callname) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        callname,
        '. 죄…… 죄송합니다. 이…… 공포 영화는 너무 긴장되어서, 조금……',
      ]);
      await era.printAndWait(
        `영화가 끝나자 의자 위에 작은 물웅덩이가 생겨 있었다.`,
      );
    } else {
      await ruby.say_and_wait([
        '筋が面白く、心を掴む佳作だと伺いましたわ、',
        callname,
        '。ですがあなたの前科を考えますと、わたくしにはどのタイツを履いてほしいのですの？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ダイイチルビーがプレイヤーを呼ぶ呼称
   */
  async o_c_pray(ruby, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 최근 컨디션이 좋지 않은 ',
      ruby.get_colored_name(),
      ', 그리고 집사를 데리고, 세 명이 함께 신사에 도착했다.',
    ]);
    await ruby.say_and_wait(
      `토리이는 신이 거처하는 영역과 우리가 살아가는 일상 세계를 구분 짓는 결계입니다.`,
    );
    await era.printAndWait(
      `지나갈 때는 반드시 가볍게 예를 갖추어 절을 해야 합니다.`,
    );
    await ruby.say_and_wait(`……무슨 일이시죠?`);
    era.printButton(`「예의범절이 아주 완벽하다고 생각해서 말이야.」`, 1);
    await era.input();
    await ruby.say_and_wait(
      `우리 일족은 참배할 기회가 많기 때문에, 어릴 때부터 자연스럽게 배웠습니다.`,
    );
    await ruby.say_and_wait(
      `물론 기도는…… 무언가에 의지하기 위함이 아닙니다. 길을 개척할 수 있는 것은 오직 자신뿐이니까요.`,
    );
    await ruby.say_and_wait(
      `신사란 자신의 뜻과 정면으로 마주하는 공간입니다. 그렇기 때문에 올바른 예법을 갖추어야만 하죠.`,
    );
    await ruby.say_and_wait(`그럼, 참배하러 가겠습니다.`);
    era.drawLine();
    await ruby.say_and_wait([callname, '도 끝났나요? 그렇다면……']);
    await you.say_as_passer_by_and_wait(`신관`, [
      '어머, ',
      ruby.actual_name_with_title,
      ' 아니십니까. 참배해 주셔서 감사합니다.',
    ]);
    await ruby.say_and_wait(
      `신관님. 이따가 업무상 인사를 드리러 찾아뵙겠습니다.`,
    );
    era.drawLine();
    await ruby.say_and_wait(
      `신관님께 드리는 인사와 참배를 마치는 예까지 모두 끝났습니다. 돌아가도록 하지요.`,
    );
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_s_restaurant(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          `점심은 저 혼자 먹었습니다. 특별한 일이 없다면 굳이 다른 사람과 함께 식사할 필요는 없으니까요.`,
        ),
      () =>
        ruby.say_and_wait(
          `당신이 식사하는 모습은 무척 보기 좋습니다. 어라, 여기 밥풀이 묻었네요.`,
        ),
      () =>
        ruby.say_and_wait(
          `食事中に覗くのは品位に欠けますわ。お好みの衣装があれば、後ほど試着いたしますわ。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby ダイイチルビー
   * @param {PrintedSpan} callname ダイイチルビーがプレイヤーを呼ぶ呼称
   */
  async o_s_dating(ruby, callname) {
    const buffer = [];
    buffer.push(
      () => ruby.say_and_wait(`아름다운 곳이군요. 마음에 듭니다.`),
      () =>
        ruby.say_and_wait(
          `가끔은 당신과 만나게 된 인연에 감사하고 싶어지네요.`,
        ),
      () => ruby.say_and_wait(`이것도 업무의 일환인가요?`),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `강도나 폭행 같은 사건은 이런 지하철 상가에서 많이 발생합니다. 본격화한 ${ruby.uma_sex_title}라도 방심하면 당할 수 있지요.`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          callname,
          '、わたくしより車が来たかを見ないで、本当に大丈夫ですの？……待ちなさい！ 動いたら、人に見られますわ……',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby ダイイチルビー */
  async o_s_shopping(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait(
        '상가 초대장과 행사장 출입증입니다. 내부가 넓으니 제가 손을 잡고 안내해도 될까요?',
      ),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          '어머니는 아버지와 결혼하신 지 석 달 만에 임신하셨습니다. 육아용품에 관심이 있어서 드리는 말씀은 아닙니다.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  cl_new_year: (() => {
    const title = '새해';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '正月の幸せな気配に、',
        you.get_colored_name(),
        ' は朝から今まで興奮しっぱなしだった。',
      ]);
      await era.printAndWait(['新年の初撃ち、いくか？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は待ちきれず、こっそり ',
        ruby.get_colored_name(),
        ' の傍へ寄り、甘えた顔で示唆した。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は怒ったように ',
        you.get_colored_name(),
        ' を睨み、「消えなさい」と手で示した。',
      ]);
      await era.printAndWait([
        '怒った顔がことのほか冷たく美しい。追い立てられた ',
        you.get_colored_name(),
        ' の決断は？',
      ]);
      era.printButton('방으로 돌아가 잔다.', 1);
      era.printButton('ルビーを腰から抱き上げる。', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '一晩中、',
          you.get_colored_name(),
          ' は寝返りを打ち、眠れなかった。',
        ]);
        await era.printAndWait([
          '結局、',
          you.get_colored_name(),
          ' は涙を流しながら、トイレで新年の初撃ちをした。',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は悲鳴を上げ、靴も脱げぬまま ',
          you.get_colored_name(),
          ' にベッドへ押し倒された。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は乱暴に ',
          ruby.get_colored_name(),
          ' の上着を引き、微かに膨らんだ柔嫩な乳房へ顔を埋めて擦った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は久しぶりに、白い肌の香りを深く吸い込んだ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は続いてファスナーを下ろし、長く我慢した相棒に空気を吸わせた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' に逃げさせず、細い腰へ両手で軽く力をかけた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の硬い下体が ',
          ruby.get_colored_name(),
          ' の滑らかで狭い入り口に嵌り、それから幼い通路を何度も貫き始めた。',
        ]);
        await era.printAndWait([
          '最後、',
          ruby.get_colored_name(),
          ' の小さな子宮の内壁に突き当たって止まった。それでも根元の一部は、まだ空気に晒されている。',
        ]);
        await ruby.say_and_wait('壊……壊れますわ！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の小さな両手は ',
          you.get_colored_name(),
          ' の肩に乗って震えているが、暴れることはしない。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は止まった。']);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' が少し慣れてから、腰を抱えて滑らせ始めた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の特殊な体質のせいか、',
          you.get_colored_name(),
          ' の下体は進むときほとんど負担を感じない。',
        ]);
        await era.printAndWait([
          '少し重みのある人形を抱いているような、軽さだった。',
        ]);
        await era.printAndWait([
          'そこから伝わる包容と摩擦が、',
          you.get_colored_name(),
          ' を雲の上へ連れていく。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の子宮の縁に当たるたび、彼女の激しい叫びと喘ぎが ',
          you.get_colored_name(),
          ' を笑わせる。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に、もっと優しく、もっと遅くと哀願した。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は腰のリズムを速め、',
          ruby.get_colored_name(),
          ' の喘ぎと叫びも増していった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の内側で、征服欲が燃え上がった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' のウイニングライブの歌声は、疑いなく心を奪う天使の声だ。',
        ]);
        await era.printAndWait([
          'だが今の嬌声は、',
          you.get_colored_name(),
          ' の魂を堕落の地獄へ引き下ろすだけだった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' がまだ欲の湧き上がりを感じる前に。',
        ]);
        await era.printAndWait([
          '突然、',
          ruby.get_colored_name(),
          ' の全身が後ろへ弓なりになり、膣も震え、締めつけてきた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の可愛い小さな顔を叩いた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は数分、意識を失い、ぼんやりと戻ってきた。',
        ]);
        await era.printAndWait([
          'そこで ',
          you.get_colored_name(),
          ' の下体は、また抽送を始めた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の白タイツを半分脱がせ、鼻先へ持っていった。',
        ]);
        await era.printAndWait([
          '脱いだばかりのタイツには、',
          ruby.get_colored_name(),
          ' の香りが残っている。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は強く吸い、香水を味わうようにした。',
        ]);
        await ruby.say_and_wait('変態。');
        await era.printAndWait([
          you.get_colored_name(),
          ' は揺れる速度を上げた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は上下に揺らし、左右に回した。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は唇を強く噛み、快感の侵入に抗っているようだった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' が再び絶頂するまで我慢し、それから欲を解放した。',
        ]);
        await era.printAndWait([
          '彼女の失神ぶりは大げさで、涙も涎もすべて溢れていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は親切に舌を出し、残らず舐め取った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はこの間の圧力を、一度にぶちまけたかった。',
        ]);
        await era.printAndWait([
          'だが ',
          ruby.get_colored_name(),
          ' はもうぐったりで、死にかけの様子だった。',
        ]);
        await era.printAndWait([
          '絶頂する姿はますます可愛く、肌は潮紅の美しい光沢を帯びている。',
        ]);
        await era.printAndWait([
          '唇は紅く潤み、溶けかけの情趣キャンドルのようだった。',
        ]);
        await era.printAndWait([
          'とりわけ水を含んだ瞳は、湿って朧げで、一目見るだけで魂を吸い込まれそうになる。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' が息絶えないか恐れ、自分も少し力尽きた ',
          you.get_colored_name(),
          ' は、来年また戦うことにした。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await ruby.say_and_wait('欲しい贈り物は、決まりましたか？');
      era.printButton('「あなたが欲しい。」', 1);
      await era.input();
      await ruby.say_and_wait('真摯な答えですわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は手元の動きを止め、わずかに顔を赤らめた。',
      ]);
      await ruby.say_and_wait('でしたら、あなたの働き次第ですわ。');
      await era.printAndWait([
        '두 사람은 장식할 크리스마스트리를 잔뜩 사들였다. 어떤 의미에서는 ',
        ruby.get_colored_name(),
        '의 동심이 남아있기 때문이 아닐까.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 문득 자신이 크리스마스트리를 한 번도 꾸며본 적이 없다는 사실을 깨달았지만, 이제는 ',
        ruby.get_colored_name(),
        '와 함께하게 되었다.',
      ]);
      await era.printAndWait(
        '지팡이 모양의 작은 사탕, 구멍 뚫린 금화, 진저브레드 맨과 온갖 종류의 장난감들이 가지 끝에 매달렸다.',
      );
      await era.printAndWait([
        '물론 편자 장식도 있었다. ',
        ruby.get_colored_name(),
        '는 그것이 무척 마음에 든 모양이다.',
      ]);
      await era.printAndWait([
        '이어서 몸단장을 할 시간이다. ',
        ruby.get_colored_name(),
        ' の言葉は曖昧だったが、',
        you.get_colored_name(),
        ' には今夜を期待しているのが分かった。',
      ]);
      await era.printAndWait([
        '無事に風呂を終え、',
        ruby.get_colored_name(),
        ' が先に上がり、寝室の大きなベッドの縁に座った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も後を追った。ただし ',
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' を抱いて、むしゃぶりついた。',
      ]);
      await era.printAndWait([
        '麻酔のように、',
        you.get_colored_name(),
        ' はもっと近く、もっと近く撫で、キスし、舐めたいだけだった。',
      ]);
      await era.printAndWait(
        '部屋にも飾りが多く、大ベッドの四本の柱には、優秀な素質に近い色のリボンが結ばれている。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は一本を取り、軽く ',
        ruby.get_colored_name(),
        ' の手を縛った。',
      ]);
      await era.printAndWait(
        '淡い黄色の肌は小麦の健康な色を透かし、脚の間の凶器は近頃の頻繁な使用で深紅になっていた。',
      );
      await era.printAndWait('反った先端は、紅から紫へ変わりかけている。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の髪を耳の後ろへやり、巨棒が小さな顔へ近づいていく。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は顔を上げ、',
        you.get_colored_name(),
        ' へ微笑み、舌を出して先を突いた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の小さなトレーナーは震え、嬉しそうに ',
        ruby.get_colored_name(),
        ' の口を追った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は素直に ',
        you.get_colored_name(),
        ' を受け入れ、口を精一杯開けて、ようやく含めた。',
      ]);
      await era.printAndWait(
        '喉を鳴らし、ゆっくり引き、唇だけが先端に触れたところで、また含み直す。',
      );
      await era.printAndWait([
        '動きは遅いのに、',
        you.get_colored_name(),
        ' は叫びそうになった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の頭を抱えて前後に揺らし始めた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は少し抵抗したあと、懸命に ',
        you.get_colored_name(),
        ' のリズムに合わせた。',
      ]);
      await era.printAndWait([
        '人間が ',
        you.get_colored_name(),
        ' にこう口腔を犯されれば、出血せずとも皮が剥けるだろう。',
      ]);
      await era.printAndWait([
        'しばらくして、',
        ruby.get_colored_name(),
        ' の頬が酸っぱくなってから、',
        you.get_colored_name(),
        ' はようやく射精した。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' が飲みきれなかった分は、体へ噴きかかった。',
      ]);
      await era.printAndWait([
        '一時、口が閉じられず、',
        ruby.get_colored_name(),
        ' は横目で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      era.printButton('「ルビー、ごめん。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は愛馬の肩を抱き、可愛い耳を撫で、口角にキスして、ようやく ',
        ruby.get_colored_name(),
        ' をなだめた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は姿勢を変え、背を向けて ',
        you.get_colored_name(),
        ' の胸の上に座り、わざと尻を突き出した。',
      ]);
      await era.printAndWait([
        '白い二つの瓣が ',
        you.get_colored_name(),
        ' の眼前で揺れ、',
        you.get_colored_name(),
        ' は初めて会ったときも、ここに視線を吸われたのを思い出した。',
      ]);
      await era.printAndWait([
        '臀を掴み、',
        you.get_colored_name(),
        ' は我慢できず揉みしだいた。',
      ]);
      await era.printAndWait('強く掴んで放し、それから平手で叩いた。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は二度震え、赤い指跡がすぐに浮かび、鮮やかだった。',
      ]);
      await ruby.say_and_wait('早く……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の言うとおり、舌を伸ばして深い股溝を舐め、上から下へ、小さな窪みまで滑った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は人差し指で開き、皺だらけで、ピンクに縮こまっている。',
      ]);
      await era.printAndWait([
        '肉欲の匂いが中から漂い、',
        you.get_colored_name(),
        ' を探索へ誘う。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はぐったり ',
        you.get_colored_name(),
        ' の脚へ倒れ、鼻先には屹立した硬さがある。彼女はこの温存を楽しんでいた。',
      ]);
      await ruby.say_and_wait('今日はここまでにいたしましょう。疲れましたわ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は残念そうにそこを見つめ、名残惜しそうだった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} ruby ダイイチルビー */
  async load_talk(ruby) {
    await ruby.say_and_wait('……이것이, 당신의 의지이신가요?');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('……알겠습니다');
    await ruby.say_and_wait([
      ruby.get_colored_name(),
      '는, 다른, 트레이너를——',
    ]);
    await ruby.print_and_wait(
      `${ruby.sex}는 말을 끝까지 맺지 못한 채 달려 나가 버렸고, 그 자리에는 몇 방울의 눈물 자국만이 남아 있었다……`,
    );
  },
  basement_end: (() => {
    const title = '足の感度が高い';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('ルビーお母さん……ルビーお母さん……');
      era.println();
      era.print([
        you.get_colored_name(),
        ' にとって、こうした暮らしも悪くないのかもしれない。',
      ]);
      era.print(
        'ただ、呼吸はまだ通らない。顔に被さっているのは、ルビーが昨日履き替えた白いタイツで、すでに散った光を、さらに誘惑へと染めている。',
      );
      era.print('瞼の上からでも、夢はその薄い紗を纏う。');
      era.print(
        `ルビーの体を通ったタイツ、酔いそうな気配と、温かな体温が描く朦朧とした美しさが、${you.name} をじれったくさせる。`,
      );
      era.print(
        `ルビーの、とっくに ${you.name} を征服した美しい足が、${you.name} の前で止まり、時折鼻先を軽く突いて擦り、また上がる。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、体温の残る足裏に口づけしようとする。空虚なとき、何度も落ちる軽いキスが、何度も ${you.name} の体内の被虐の狂熱を誘う……`,
      );
      era.println();

      await era.printAndWait('또각, 또각, 또각……');
      era.println();

      era.print(
        `誘うリズムが規則正しく鳴り、${you.name} は虚無の中から、心を奪われてやまない姿が歩いてくるのを見た気がした。`,
      );
      era.print(
        `あの婀娜な曲線、妖しい姿、そして蕩ける双眸が、${you.name} の鼓動をさらに激しくする。`,
      );
      await era.printAndWait(
        `現実か夢か、もう分からない。${you.name} は自分の経緯を忘れ、今はベッドに寝ているのでもないような気がした。`,
      );
      era.println();

      await ruby.say_and_wait(
        '下賤な子犬、そんなにお母さんの匂いが好きですの？ もう空っぽに射精したのに、まだお母さんがいじめ続けてほしいんですの？',
      );
      era.println();

      era.print(
        `${you.name} は舌も口腔も痺れ、頭は空っぽで、射精しすぎて言語能力を忘れたようだった。`,
      );
      era.print(
        `ルビーお母さんの言葉を聞き、${you.name} は思わず間抜けに笑い、後庭のローターも電流が尽きて止まった。すべてが広がり、平凡に戻ったように。`,
      );
      era.print(
        `そして ${you.name} のルビーお母さんは、今は軽く笑い、立ち上がる。威厳があり、魅力に満ちている。`,
      );
      era.print(
        `美しい足が胸の蕾を突き、すでに濁液だらけの白いタイツを自分の足に履き、身を屈めて、${you.name} の胸の上でタイツを履き始めた。`,
      );
      era.print(
        `粗い感触に、慣性の滑らかさが混ざる。${you.name} は気持ちよさに呻き、${you.name} は生きる意味を見つけたように、ルビーお母さんの足敷きになり、肉便器になり、従順な下賤な犬になり、精液を捧げるのも悪くないと思った。`,
      );
      era.print(
        `${you.name} はこれまでの罪も過ちも、これで償えた気がし、この過程を楽しんでいた。`,
      );
      await era.printAndWait(
        `靴敷きのようにされ、ルビーお母さんが ${you.name} の好きな黒い革靴を履くのを見る。硬い模様が蕾を碾き、電撃のような感覚が、${you.name} を雲の間、黄泉の上で滋養されているように感じさせた。`,
      );
      era.println();

      await ruby.say_and_wait(
        'では、下賤な子犬の息子、床に大人しく寝ていなさい。ルビーお母さんは貞操帯を探しに行きますわ。これからあなたは、ルビーお母さんの傍の下賤な犬。命令の下でしか、屈辱的に射精できませんわ。',
      );
      era.println();

      era.print(
        `これが以心伝心か。${you.name} のルビー、いや、${you.name} のルビーお母さんは、すでに自分の心の中での重みを察していた。`,
      );
      era.print(
        `${you.name} も進んで、心から、心悦誠服して、ルビーお母さんの下賤な犬になる！`,
      );
      era.print(
        `足音が遠ざかると、${you.name} は胸の大石が下りた気がし、肉棒はこうして萎え、手で撫でても動かない。`,
      );
      era.print(
        `${you.name} は疲れ、昏々とまた眠りへ落ちた。そうすれば ${you.name} はルビーお母さんの足跡を追い、ルビーお母さんに会えるような、ルビーお母さんの足下へ沈み、永遠にルビーお母さんの美しい足の匂いを嗅げるような気がした。`,
      );
      era.print(
        `肉棒はまた徐々に立ち上がり、${you.name} は自分がどんな境遇にいるのか、どこにいるのか分からない……`,
      );
      await era.printAndWait(
        `だが夢のいちばん手前で、ルビーお母さんは妖艶な両足を伸ばし、足裏を ${you.name} の前へ向け、優しく笑い、${you.name} を見つめている……`,
      );
    };
    f.title = title;
    return f;
  })(),
};
