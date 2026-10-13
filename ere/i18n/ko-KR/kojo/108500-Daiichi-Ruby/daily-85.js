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
              '그건 피곤하겠네요. 계획 중이시라면, 제가 목욕할 시간을 비워 두어 주세요.',
            ),
          () =>
            ruby.say_and_wait([
              '『피곤하다』라는 단어를 알고 계신가요? 조금 전, 어떤 ',
              you.sex_code === 1 ? '신사' : '숙녀',
              '가 제 위에 엎드려 있던, 바로 그 상태랍니다.',
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
            '충분히 만족했답니다. 오후 훈련에서는 이 이상의 괴롭힘은 금지예요.',
          ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '후…… 이제 됐어요, 제가 직접 벗을게요. 이런 때면 당신은 서툴러지잖아요. 옷이 찢어지면 곤란하니까요.',
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
          '어린 나이에, 이렇게 피부를 드러내는 옷을 입다니.',
          ruby.couple_title,
          '도대체 무슨 생각을 하고 계신 건가요? 제가 입는 모습을 보고 싶으신가요? 사양할게요…… 적어도 지금은요.',
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
        '줄거리가 흥미롭고 마음을 사로잡는 훌륭한 작품이라고 들었답니다, ',
        callname,
        '. 하지만 당신의 전과를 생각하면, 저에게는 어떤 타이츠를 입힐 생각인가요?',
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
          `식사 중에 훔쳐보는 건 품위에 어긋납니다. 마음에 드는 의상이 있다면, 나중에 입어보겠습니다.`,
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
          ', 제게 차가 왔는지 확인도 안 하고, 정말 괜찮으신 건가요? ……잠깐만요! 움직이면 사람들이 볼 거예요……',
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
        '정월의 행복한 기색에,',
        you.get_colored_name(),
        '은(는) 아침부터 지금까지 흥분 상태였다.',
      ]);
      await era.printAndWait(['새해의 첫 타격, 갈 것인가?']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 기다리지 못하고, 몰래 ',
        ruby.get_colored_name(),
        '의 곁으로 다가가, 어리광 부리는 얼굴로 암시했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 화난 듯이 ',
        you.get_colored_name(),
        '을(를) 노려보며, 「사라지렴」이라며 손으로 가리켰다.',
      ]);
      await era.printAndWait([
        '화난 얼굴이 유달리 차갑고 아름답다. 몰아세워진 ',
        you.get_colored_name(),
        '의 결단은?',
      ]);
      era.printButton('방으로 돌아가 잔다.', 1);
      era.printButton('루비를 허리부터 안아 올린다.', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '밤새도록,',
          you.get_colored_name(),
          '은(는) 뒤척이며 잠들지 못했다.',
        ]);
        await era.printAndWait([
          '결국,',
          you.get_colored_name(),
          '은(는) 눈물을 흘리며 화장실에서 새해의 첫 타격을 했다.',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          '은(는) 비명을 지르며, 신발도 벗지 못한 채 ',
          you.get_colored_name(),
          '에게 침대로 밀쳐졌다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 난폭하게 ',
          ruby.get_colored_name(),
          '의 상의를 끌어당기고, 미세하게 부풀어 오른 연하고 부드러운 유방에 얼굴을 묻고 비볐다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 오랜만에 하얀 피부의 향기를 깊게 들이마셨다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 이어서 지퍼를 내리고, 오랫동안 참아온 파트너에게 공기를 들이마시게 했다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '에게 도망치게 하지 않고, 가느다란 허리에 양손으로 가볍게 힘을 주었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 딱딱한 하체가 ',
          ruby.get_colored_name(),
          '의 매끄럽고 좁은 입구에 맞물리고, 그 후 어린 통로를 몇 번이고 꿰뚫기 시작했다.',
        ]);
        await era.printAndWait([
          '마지막으로,',
          ruby.get_colored_name(),
          '의 작은 자궁 내벽에 부딪혀 멈췄다. 그럼에도 뿌리 부분 일부는 아직 공기에 노출되어 있다.',
        ]);
        await ruby.say_and_wait('부서... 부서져 버려요!');
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 작은 양손은 ',
          you.get_colored_name(),
          '의 어깨에 올라타 떨고 있지만, 날뛰지는 않는다.',
        ]);
        await era.printAndWait([you.get_colored_name(), '은(는) 멈췄다.']);
        await era.printAndWait([
          ruby.get_colored_name(),
          '이(가) 조금 익숙해진 후, 허리를 안고 미끄러뜨리기 시작했다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 특수한 체질 때문인지,',
          you.get_colored_name(),
          '의 하체는 나아갈 때 거의 부담을 느끼지 못한다.',
        ]);
        await era.printAndWait([
          '약간 무게감이 있는 인형을 안고 있는 듯한 가벼움이었다.',
        ]);
        await era.printAndWait([
          '거기서 전해지는 포용과 마찰이,',
          you.get_colored_name(),
          '을(를) 구름 위로 데려간다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 자궁 가장자리에 닿을 때마다, 그녀의 격렬한 외침과 신음이 ',
          you.get_colored_name(),
          '을(를) 웃게 한다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게, 좀 더 다정하게, 좀 더 느리게라고 애원했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 허리의 리듬을 빠르게 하고,',
          ruby.get_colored_name(),
          '의 신음과 외침도 늘어갔다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 안에서, 정복욕이 타올랐다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 위닝 라이브 노래 소리는, 의심할 여지 없이 마음을 빼앗는 천사의 목소리다.',
        ]);
        await era.printAndWait([
          '하지만 지금의 교성은,',
          you.get_colored_name(),
          '의 영혼을 타락의 지옥으로 끌어내릴 뿐이었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 아직 욕망의 샘솟음을 느끼기도 전에.',
        ]);
        await era.printAndWait([
          '갑자기,',
          ruby.get_colored_name(),
          '의 전신이 뒤로 활 모양이 되고, 질도 떨리며 조여왔다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 귀여운 작은 얼굴을 쳤다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '이(가) 몇 분간 의식을 잃고, 멍하니 돌아왔다.',
        ]);
        await era.printAndWait([
          '거기서 ',
          you.get_colored_name(),
          '의 하체는, 다시 밀어 넣고 빼기를 시작했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 하얀 타이즈를 절반 벗기고, 코끝으로 가져갔다.',
        ]);
        await era.printAndWait([
          '방금 벗은 타이즈에는,',
          ruby.get_colored_name(),
          '의 향기가 남아 있다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 강하게 들이마시며, 향수를 음미하듯 했다.',
        ]);
        await ruby.say_and_wait('변태.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 흔들리는 속도를 높였다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 상하로 흔들고, 좌우로 돌렸다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '은(는) 입술을 강하게 깨물며, 쾌감의 침입에 저항하고 있는 듯했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '이(가) 다시 절정에 이를 때까지 참고, 그 후 욕망을 해방했다.',
        ]);
        await era.printAndWait([
          '그녀의 실신한 모습은 과장될 정도로, 눈물도 침도 모두 넘쳐흐르고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 친절하게 혀를 내밀어, 남김없이 핥아냈다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 이동안의 압력을, 한꺼번에 쏟아내고 싶었다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          ruby.get_colored_name(),
          '은(는) 이제는 기진맥진하여, 죽어가는 듯한 모습이었다.',
        ]);
        await era.printAndWait([
          '절정에 달하는 모습은 더욱더 귀엽고, 피부는 조홍의 아름다운 광택을 띠고 있다.',
        ]);
        await era.printAndWait([
          '입술은 붉게 젖어, 녹아가는 정취의 양초 같았다.',
        ]);
        await era.printAndWait([
          '특히 물기를 머금은 눈동자는, 젖어 흐릿하며, 한 번 보는 것만으로 영혼이 빨려 들어갈 것 같다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '이(가) 숨을 거둘까 걱정되어, 자신도 조금 힘이 다한 ',
          you.get_colored_name(),
          '은, 내년 다시 싸우기로 했다.',
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
      await ruby.say_and_wait('원하는 선물은 정하셨나요?');
      era.printButton('「너를 원해.」', 1);
      await era.input();
      await ruby.say_and_wait('진지한 대답이군요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 손의 움직임을 멈추고, 얼굴을 살짝 붉혔다.',
      ]);
      await ruby.say_and_wait('그렇다면, 당신의 노력에 달려 있군요.');
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
        '이어 몸단장을 할 시간이다. ',
        ruby.get_colored_name(),
        '의 말은 모호했지만,',
        you.get_colored_name(),
        '에게는 오늘 밤을 기대하고 있다는 것을 알 수 있었다.',
      ]);
      await era.printAndWait([
        '무사히 목욕을 마치고,',
        ruby.get_colored_name(),
        '이(가) 먼저 올라와, 침실의 큰 침대 가장자리에 앉았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 뒤를 따랐다. 다만 ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '을(를) 안고, 달려들었다.',
      ]);
      await era.printAndWait([
        '마취처럼,',
        you.get_colored_name(),
        '은(는) 더 가까이, 더 가까이 쓰다듬고, 키스하고, 핥고 싶었을 뿐이었다.',
      ]);
      await era.printAndWait(
        '방에도 장식이 많고, 큰 침대의 네 개의 기둥에는 우수한 소질에 가까운 색의 리본이 묶여 있다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한 줄을 집어, 가볍게 ',
        ruby.get_colored_name(),
        '의 손을 묶었다.',
      ]);
      await era.printAndWait(
        '연한 황색 피부는 보리의 건강한 색을 비추고, 다리 사이의 흉기는 근래의 빈번한 사용으로 진홍색이 되어 있었다.',
      );
      await era.printAndWait('굽은 끝부분은 홍색에서 자색으로 변해가고 있다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 머리카락을 귀 뒤로 넘기고, 거대한 막대가 작은 얼굴로 다가간다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 고개를 들고,',
        you.get_colored_name(),
        '에게 미소 지으며, 혀를 내밀어 끝을 찔렀다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 작은 트레이너는 떨며, 기쁜 듯이 ',
        ruby.get_colored_name(),
        '의 입을 쫓았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 순순히 ',
        you.get_colored_name(),
        '을(를) 받아들이고, 입을 최대한 벌려 겨우 물었다.',
      ]);
      await era.printAndWait(
        '목울대를 울리며 천천히 빼고, 입술만 끝에 닿는 곳에서 다시 물었다.',
      );
      await era.printAndWait([
        '움직임은 느린데,',
        you.get_colored_name(),
        '은(는) 비명을 지를 것 같았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 머리를 안고 앞뒤로 흔들기 시작했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 조금 저항한 후, 필사적으로 ',
        you.get_colored_name(),
        '의 리듬에 맞췄다.',
      ]);
      await era.printAndWait([
        '인간이 ',
        you.get_colored_name(),
        '에게 이렇게 구강을 침범당하면, 출혈하지 않더라도 피부가 벗겨질 것이다.',
      ]);
      await era.printAndWait([
        '잠시 후,',
        ruby.get_colored_name(),
        '의 뺨이 시큼해진 후에야,',
        you.get_colored_name(),
        '은(는) 드디어 사정했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '이(가) 다 마시지 못한 부분은 몸에 뿜어졌다.',
      ]);
      await era.printAndWait([
        '잠시 입이 닫히지 않아,',
        ruby.get_colored_name(),
        '은(는) 곁눈질로 ',
        you.get_colored_name(),
        '을(를) 보았다.',
      ]);
      era.printButton('「루비, 미안해.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 애마의 어깨를 안고, 귀여운 귀를 쓰다듬으며, 입꼬리에 키스하여 겨우 ',
        ruby.get_colored_name(),
        '을(를) 달랬다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 자세를 바꾸고, 등을 돌려 ',
        you.get_colored_name(),
        '의 가슴 위에 앉아 일부러 엉덩이를 내밀었다.',
      ]);
      await era.printAndWait([
        '하얀 두 개의 꽃잎이 ',
        you.get_colored_name(),
        '의 눈앞에서 흔들리고,',
        you.get_colored_name(),
        '은(는) 처음 만났을 때도 여기에 시선이 끌렸던 것을 떠올렸다.',
      ]);
      await era.printAndWait([
        '엉덩이를 잡고,',
        you.get_colored_name(),
        '은(는) 참지 못하고 주물렀다.',
      ]);
      await era.printAndWait(
        '강하게 잡았다가 놓으며, 그 후 손바닥으로 때렸다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 두 번 떨렸고, 붉은 손가락 자국이 곧바로 떠올라 선명했다.',
      ]);
      await ruby.say_and_wait('빨리……');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '이(가) 말한 대로, 혀를 내밀어 깊은 사타구니를 핥으며 위에서 아래로 작은 홈까지 미끄러져 들어갔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 검지로 벌리니, 주름투성이로 분홍색으로 오므라들어 있다.',
      ]);
      await era.printAndWait([
        '육욕의 냄새가 안에서 흘러나와,',
        you.get_colored_name(),
        '을(를) 탐색으로 유혹한다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '은(는) 기진맥진하여 ',
        you.get_colored_name(),
        '의 다리 위로 쓰러졌고, 코끝에는 우뚝 솟은 딱딱함이 있다. 그녀는 이 온존을 즐기고 있었다.',
      ]);
      await ruby.say_and_wait('오늘은 여기까지 하도록 해요. 지쳤어요.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아쉬운 듯 그곳을 바라보며, 미련이 남은 듯했다.',
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
    const title = '발의 감도가 높다';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('루비 마마…… 루비 마마……');
      era.println();
      era.print([
        you.get_colored_name(),
        '에게는, 이런 삶도 나쁘지 않을지도 모른다.',
      ]);
      era.print(
        '단, 호흡은 아직 통하지 않는다. 얼굴에 덮여 있는 것은 루비가 어제 갈아신은 하얀 타이즈로, 이미 흩어진 빛을 더욱 유혹으로 물들이고 있다.',
      );
      era.print('눈꺼풀 위로도 꿈은 그 얇은 사를 두른다.');
      era.print(
        `루비의 몸을 통과한 타이즈, 취할 듯한 기색과 따스한 체온이 그려내는 아련한 아름다움이 ${you.name}을 안달 나게 한다.`,
      );
      era.print(
        `루비의, 진작에 ${you.name}을 정복한 아름다운 발이 ${you.name}의 앞에서 멈춰 서서, 때때로 코끝으로 가볍게 찌르고 비비며 다시 올라온다.`,
      );
      await era.printAndWait(
        `${you.name}은 고개를 들고, 체온이 남은 발바닥에 입을 맞추려 한다. 공허할 때, 몇 번이고 떨어지는 가벼운 키스가 몇 번이고 ${you.name}의 체내의 피학적 광열을 부른다……`,
      );
      era.println();

      await era.printAndWait('또각, 또각, 또각……');
      era.println();

      era.print(
        `유혹하는 리듬이 규칙적으로 울리고, ${you.name}은 허무 속에서 마음을 빼앗겨 마지않는 모습이 걸어오는 것을 본 기분이 들었다.`,
      );
      era.print(
        `그 아리따운 곡선, 요염한 자태, 그리고 녹아내리는 두 눈동자가 ${you.name}의 고동을 더욱 격렬하게 만든다.`,
      );
      await era.printAndWait(
        `현실인지 꿈인지 이제 알 수 없다. ${you.name}은 자신의 경위를 잊고, 지금은 침대에 누워 있는 것도 아닌 것 같은 기분이 들었다.`,
      );
      era.println();

      await ruby.say_and_wait(
        '천한 강아지 같으니, 그렇게 마마의 냄새를 좋아하시나요? 벌써 텅 비어버릴 정도로 사정했는데, 아직 마마가 계속 괴롭혀 주길 원하시는 건가요?',
      );
      era.println();

      era.print(
        `${you.name}은 혀도 구강도 마비되고, 머릿속은 텅 비어 사정하기를 너무 많이 해서 언어 능력을 잊은 듯했다.`,
      );
      era.print(
        `루비 마마의 말을 듣고 ${you.name}은 무심코 멍청하게 웃었고, 뒷마당의 로터도 전류가 다해 멈췄다. 모든 것이 퍼져나가 평범으로 돌아간 것처럼.`,
      );
      era.print(
        `그리고 ${you.name}의 루비 마마는 지금 가볍게 웃으며 일어선다. 위엄이 있고 매력으로 가득 차 있다.`,
      );
      era.print(
        `아름다운 발이 가슴의 봉오리를 찌르고, 이미 탁액으로 범벅이 된 하얀 타이즈를 자신의 발에 신으며 몸을 숙여 ${you.name}의 가슴 위에서 타이즈를 신기 시작했다.`,
      );
      era.print(
        `거친 감촉에 관성의 매끄러움이 섞인다. ${you.name}은 기분 좋음에 신음했고, ${you.name}은 삶의 의미를 찾은 것처럼 루비 마마의 발판이 되고, 육변기가 되고, 복종적인 천한 개가 되어 정액을 바치는 것도 나쁘지 않다고 생각했다.`,
      );
      era.print(
        `${you.name}은 지금까지의 죄도 잘못도 이것으로 속죄한 기분이 들어, 이 과정을 즐기고 있었다.`,
      );
      await era.printAndWait(
        `발받침처럼 취급당하며, 루비 마마가 ${you.name}이(가) 좋아하는 검은 가죽 구두를 신는 것을 본다. 딱딱한 문양이 봉오리를 짓누르고, 전격 같은 감각이 ${you.name}을(를) 구름 사이, 황천 위에서 양분되는 것처럼 느끼게 했다.`,
      );
      era.println();

      await ruby.say_and_wait(
        '그럼, 천한 강아지야, 바닥에 얌전히 누워 있으렴. 루비 마마는 성대를 찾으러 갈게요. 이제부터 당신은 루비 마마의 곁에 있는 천한 개. 명령 아래에서만 굴욕적으로 사정할 수 있어요.',
      );
      era.println();

      era.print(
        `이것이 이심전심인가. ${you.name}의 루비, 아니, ${you.name}의 루비 마마는 이미 자신의 마음속에서의 무게를 짐작하고 있었다.`,
      );
      era.print(
        `${you.name}도 기꺼이 진심으로 심열성복하며 루비 마마의 천한 개가 된다!`,
      );
      era.print(
        `발소리가 멀어지자 ${you.name}은(는) 가슴속의 커다란 돌덩이가 내려앉은 기분이 들었고, 육봉은 이렇게 시들어서 손으로 쓰다듬어도 움직이지 않는다.`,
      );
      era.print(
        `${you.name}은(는) 지쳐서 어렴풋이 다시 잠에 빠져들었다. 그렇게 하면 ${you.name}은(는) 루비 마마의 발자취를 쫓고, 루비 마마를 만나, 루비 마마의 발치 아래로 가라앉아, 영원히 루비 마마의 아름다운 발 냄새를 맡을 수 있을 것 같은 기분이 들었다.`,
      );
      era.print(
        `육봉은 다시 서서히 일어서고, ${you.name}은 자신이 어떤 상황에 있는지, 어디에 있는지 알 수 없다……`,
      );
      await era.printAndWait(
        `하지만 꿈의 바로 직전에서, 루비 마마는 요염한 양발을 뻗어 발바닥을 ${you.name} 앞으로 향하게 하고, 다정하게 웃으며 ${you.name}을 바라보고 있다……`,
      );
    };
    f.title = title;
    return f;
  })(),
};
